import { appController } from '@controller/app.controller';
import express from 'express';

export const appRouter = express.Router();

appRouter.get('/hello', appController.hello);
