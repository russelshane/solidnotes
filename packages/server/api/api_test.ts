import express, { json, urlencoded, Express } from 'express';

const app: Express = express();
app.use(json());
app.use(urlencoded({ extended: true }));
