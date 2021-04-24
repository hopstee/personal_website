require('dotenv').config()
const DEV = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT;
const RESURSE = process.env.RESURSE;


export const server = DEV ? `http://localhost:${PORT}` : RESURSE;