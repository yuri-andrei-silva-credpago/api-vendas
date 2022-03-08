import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import { pagination } from 'typeorm-pagination';
import routes from './routes';
import { Request, Response } from 'express-serve-static-core';
import { NextFunction } from 'connect';
import AppError from '../../errors/AppError';
import '@shared/infra/typeorm';
import '@shared/container';
import uploadConfig from '@config/upload';
import rateLimiter from '@shared/infra/http/middlewares/rateLimiter';

const app = express();

app.use(cors());
app.use(express.json());

// app.use(rateLimiter);

app.use(pagination);

app.use('/files', express.static(uploadConfig.directory))

app.use(routes);

app.use(errors());

app.use(
  (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  });

app.listen(3333, () => {
  console.log('Server started on port 3333! ')
});


