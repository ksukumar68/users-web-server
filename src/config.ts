import * as dotenv from 'dotenv';
dotenv.config({path: __dirname + '/.env'})

const result = dotenv.config();

if(result?.error){
    throw new Error('Add .env file');
}

export const config = {
    env: process.env.APP_ENV,
    appName: process.env.APP_NAME,
    port: process.env.APP_PORT,
    mongoUri: process.env.APP_MONGOURI,
}