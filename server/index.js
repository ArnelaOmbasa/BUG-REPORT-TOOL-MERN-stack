import express from 'express';
const app = express()
const PORT = 5000;
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';
import bugRoutes from './routes/bug.routes.js';
import cors from 'cors';

app.use(cors({
  origin:"http://localhost:3000",
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Arnela');
})



app.use('/auth', authRoutes);
app.use('/bugs', bugRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/bug-report')
 .then(() => console.log('MongoDB connected'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
