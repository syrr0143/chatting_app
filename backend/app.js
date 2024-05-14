import { connectDb } from './db/connection.js'
import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';
import userRouter from './routes/user.routes.js';
import messageRouter from './routes/message.router.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/message', messageRouter);

connectDb()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`app is running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log('connectiom to mongodb failed', error)
    })

export { app };
