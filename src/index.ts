import express from 'express';
import signale from 'signale';
import { routes } from './routes';

const server = express();
const PORT = 3000;

server.use('/', routes);

server.listen(PORT, () => {
  signale.success(`Server is running on port ${PORT}`);
});
