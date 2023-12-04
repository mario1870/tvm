import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';// Füge path hinzu
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

//routes
import ergebnisse from './routes/ergebnisse.js';
app.use('/ergebnisse', ergebnisse);

import aktive from './routes/aktive.js';
app.use('/aktive', aktive);

import jugend from './routes/jugend.js';
app.use('/jugend', jugend);

import newsfeed from './routes/newsfeed.js';
app.use('/newsfeed', newsfeed);

import bookSportheim from './routes/bookSportheim.js';
app.use('/bookSportheim', bookSportheim);


// connection to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'TVM' });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (error) => {
  console.log(
    `1. 🔥 Common Error caused issue → : check your .env file first and add your mongodb url`
  );
  console.error(`2. 🚫 Error → : ${error.message}`);
});

// Start des Servers
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
