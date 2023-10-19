require('dotenv').config(); // Llama a la función para cargar las variables de entorno desde .env

exports.config = {
    port: process.env.PORT,
    redis: {
        port : process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
        db: process.env.REDIS_DB,
    }
}