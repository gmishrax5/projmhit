import dotenv from 'dotenv';
import express from 'express';

dotenv.config({
  path: './.env',
});

const app = express();
const port = process.env.PORT || 8000;

app.get('/instagram', (req, res) => {
  res.send('this is an instagram page');
});

app.get('/', (req, res) => {
    res.send('hellow world');
  });

app.listen(port, () => {
  console.log(`example app listening on port http://localhost:${port}`);
});