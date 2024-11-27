import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const url = 'mongodb://localhost:27017';
await mongoose.connect(url, { dbName: 'mountain-trails' })
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));


app.use(routes);

app.listen(3000, () => console.log('App is listening on port http://localhost:3000...'));