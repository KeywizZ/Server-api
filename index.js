// Express
const express = require('express');
// Cors
const cors = require('cors');

const TalentsRoutes = require('./src/api/talents/talents.routes')
const GenerationRoutes = require('./src/api/generations/generations.routes');

// Connect method to DataBase
const { connect } = require('./src/utils/database/db');
connect();

// Initialize Express
const app = express();


// Configuar mis cabeceras -> La información de la Petición
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

// Config de Proxies + CORS -> Meter vuestros dominios ej: http://minicodelab.dev
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200'],
    credentials: true
}));

// Límite de flujo de información
app.use(express.json({ limit: '5mb' }))


// No codifica caracteres reservador que tienene un significado especial en la URI.
app.use(express.urlencoded({
    limit: '5mb',
    extended: true
}));


// Load routes
app.use('/api/generations', GenerationRoutes);
app.use('/api/talents', TalentsRoutes);

app.use('/', (req, res, next) => {
    return res.json('Mis EndPoints son /api/generations & /api/talents')
})

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

// Error capturer
app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    })
});

// Server errors 500
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})

