import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import AppError from '@shared/errors/AppError';
import productRouter from '@shared/routes/products/index';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/shop', productRouter);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
        errorMessage: error.message
    });
});

export default app;