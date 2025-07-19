const { MongoClient } = require('mongodb');
const axios = require('axios');

const MONGO_URI = 'mongodb://root:root@localhost:27017/cursos_db?authSource=admin';
const SOLR_URL = 'http://localhost:8983/solr/curso/update?commit=true';

async function indexar() {
    const mongoClient = new MongoClient(MONGO_URI);
    try {
        await mongoClient.connect();
        const db = mongoClient.db();
        const cursos = await db.collection('cursos').find().toArray();

        const documentos = cursos.map(curso => ({
            id: curso._id.toString(),
            nombre: curso.nombre,
            descripcion: curso.descripcion,
            categoria: curso.categoria,
            capacidad: curso.capacidad,
            imagen: curso.imagen,
            valoracion: curso.valoracion,
            requisito: curso.requisitos,
            profesor: curso.profesor,
            duracion: curso.duracion
        }));

        const response = await axios.post(SOLR_URL, documentos, {
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(`Indexación completada. Respuesta de Solr: ${response.statusText}`);
    } catch (error) {
        console.error('Error indexando documentos:', error.message);
    } finally {
        await mongoClient.close();
    }
}

indexar();
