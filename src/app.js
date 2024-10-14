import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import 'dotenv/config'

import router from "./routes/index.js";

import { errorHandle } from "./errors/errHandle.js";
import { logger } from "./utils/logger.js";

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

// Middleware de manejo de errores
app.use(errorHandle);

app.listen(PORT,async() => {
    let attemp=0
    logger.info(`Listening on ${PORT}`)
    while ( attemp < 5 )
    {   
        try {
            const bd_Connect = await mongoose.connect(process.env.MONGO_DB)
            return logger.info(`Conected to [${bd_Connect.connection.name}]`)
        } catch (error) {
                attemp += 1
                logger.info(`No se pudo conectar>> intento ${attemp}`)}
                await new Promise (resolve => setTimeout(resolve,2000));
                if (attemp == 5 )
                {
                    logger.info('No se pudo conectar a la bd :( comiste')
                    logger.warn('--Servidor en funcionamiento sin conexion a BD--')

                }
            
    }
});
