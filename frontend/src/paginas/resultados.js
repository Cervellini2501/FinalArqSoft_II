import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './resultados.css';

function Resultados({ searchTerm }) {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchTerm) {
            setLoading(true);
            setError(null);
            fetch(`http://localhost:8083/search?q=${encodeURIComponent(searchTerm)}&limit=10&offset=0`)
                .then(response => {
                    
                    if (!response.ok) {
                        console.log('Response recibido:', response); // Log para inspeccionar el response completo

                        throw new Error('Error en la solicitud');
                    }
                    return response.json();
                })
                .then(data => {
                    if (Array.isArray(data)) {
                        setCursos(data);
                    } else {
                        setCursos([]);
                        setError('No se encontraron resultados o estructura de datos inválida');
                    }
                })
                .catch(error => {
                    console.error('Error fetching courses:', error);
                    setError('Error al obtener los datos');
                })
                .finally(() => setLoading(false));
        } else {
            setCursos([]);
        }
    }, [searchTerm]);

    return (
        <div className="fullscreen-container">
            <div className="Resultadosfondo">
                {loading ? (
                    <img
                        style={{ width: '36px' }}
                        src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/circular_progress_indicator_square_large.gif"
                        alt="Loading"
                    />
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div className="course-list">
                    {cursos.length > 0 ? (
                        cursos.map(curso => (
                            <div key={curso.id} className="course-list-item">
                                <div>
                                    <Link to={`/curso/${curso.id}`} className="curso-link">
                                        <strong>{curso.nombre}</strong>
                                    </Link>
                                    <p>💻{curso.descripcion}</p>
                                    <p>🗂️{curso.categoria}</p>
                                    <br/>
                                    Para más información, hacer click al nombre del curso.
                                </div>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p>No se encontraron cursos.</p>
                    )}
                </div>
                )}
            </div>
        </div>
    );
}

export default Resultados;
