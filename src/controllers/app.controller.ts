import { Request, Response } from 'express';

class AppController {
  async hello(req: Request, res: Response) {
    res.send('Hello from Express!');
  }
}

export const appController = new AppController();
