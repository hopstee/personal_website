require('dotenv').config()
const DEV = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT;


export const server = DEV ? `http://localhost:${PORT}` : 'https://edkr.vercel.app/';