import dotenv from 'dotenv'

//Va a leer el archivo .env y guardara los valores en process.env
dotenv.config()

const ENVIROMENT = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GMAIL_PASS: process.env.GMAIL_PASS,
    GMAIL_USER: process.env.GMAIL_USER,
    API_KEY_INTERN: process.env.API_KEY_INTERN,
    URL_FRONT: process.env.URL_FRONT,
    MYSQL: {
        USERNAME: process.env.MYSQL_USERNAME, //si es local 'root'
        HOST: process.env.MYSQL_HOST, //localhost
        PASSWORD: process.env.MYSQL_PASSWORD, //''
        DATABASE: process.env.MYSQL_DATABASE //nombre_base_datos
    }
}

export default ENVIROMENT