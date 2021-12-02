import { Request, Response } from 'express';

export const defaultAPIRoute = (req: Request, res: Response) => {
  const url = req.originalUrl; // Get current API route
  const response = res.status(200).json({
    message: 'SolidNotes v1.4.1',
    at: url,
    errors: null,
  });

  return response;
};
