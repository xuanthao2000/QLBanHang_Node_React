import express from 'express';
import morgan from 'morgan';
import db from './config/connectDB.js';
import productRouter from './routers/productRouter.js';

const app = express();
const port = 3000;

app.use(morgan('combined'));

db.connect();

app.use('/products', productRouter);

app.listen(port, () => console.log(`Listening at http://localhost:3000`));

