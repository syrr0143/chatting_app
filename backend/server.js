import express from 'express';
import dotenv from 'dotenv'
import { connectDb } from './db/connection.js'
import { app } from './app.js'
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`app is running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log('connectiom to mongodb failed', error)
    })


