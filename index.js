import express from 'express';
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mongoURI from './config/keys.js';
import cors from 'cors';


import items from './routes/api/items.js';
const app = express();

app.use(express.json());

app.use('/api/items', items);

const port = process.env.PORT || 5000;

mongoose.connect(mongoURI)
   .then(()=> console.log('Database connected'))
   .catch(err => console.log(err));




app.listen(port, () => console.log(`server running on port ${port}`));




