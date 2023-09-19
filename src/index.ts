import express from 'express';
import signale from 'signale';
import morgan from 'morgan';
import { routes } from './routes';
import config from './config';

const { PORT } = config;

const server = express();

server.use('/', routes);

server.use(express.json({ limit: '100mb' }));
server.use(express.urlencoded({ extended: true, limit: '100mb' }));

server.use(morgan('tiny'));

server.listen(PORT, () => {
  signale.success(`Server is running on port ${PORT}`);
});
