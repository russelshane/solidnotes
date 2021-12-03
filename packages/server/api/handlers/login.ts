import { Request, Response } from 'express';

async function login(req: Request, res: Response) {
  const { username, password } = req.body;
}

export { login };
