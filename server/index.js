import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes.js';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

app.options('*', cors({
    origin: 'http://localhost:4200',
    credentials: true,
  }));

  app.use(cookieParser());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Frontend URL
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const url = 'mongodb://localhost:27017';
await mongoose.connect(url, { dbName: 'mountain-trails' })
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));


app.use(routes);

app.listen(3000, () => console.log('App is listening on port http://localhost:3000...'));