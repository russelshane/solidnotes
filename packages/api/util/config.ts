import dotenv from 'dotenv-safe';

// Initialize APP environment variables
dotenv.config();

export const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
