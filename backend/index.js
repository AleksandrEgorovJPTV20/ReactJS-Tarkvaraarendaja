import express from 'express';
import db from './config/database.js';
import RegisterRoute from './routes/RegisterRoute.js';

import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error)
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());

app.use('/registers', RegisterRoute);

app.use('/users', userRoute);

app.listen(5000, () => console.log('Server running at the port 5000'));