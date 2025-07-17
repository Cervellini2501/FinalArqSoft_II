import React from 'react';
import './home.css';

import gif3 from '../img/welcome.jpg'


const Home = () => {

    return (
        <div className="home-container">
            <header className="header">
                <h2>B I E N V E N I D O S</h2>
            </header>

            <div className="content-carousel-container">
                <div className="content-container">
                    <section className="section">
                        <h2 className="section-title">CURSOS UCC</h2>
                        <p className="section-content">
                        Aprender a programar no tiene por qué ser complicado. En nuestra plataforma encontrás cursos claros, prácticos y actualizados para que desarrolles tus habilidades desde cero o lleves tu perfil al siguiente nivel.
                        </p>
                    </section>
                    <section className="section">
                        
                        <p className="section-content">
                        💻 Desde lo esencial hasta herramientas avanzadas, todo en un solo lugar y a tu ritmo.
                        </p>
                    </section>
                </div>
                <div className="gif-container">  
                <img src={gif3} alt="Descripción del GIF"  className='gif'/>
                </div>

            </div>
            <br/><br/><br/><br/><br/>

        </div>
    );
};

export default Home;

