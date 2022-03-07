import express from 'express';
const app = express();
const port = 3000;

app.use('/src', express.static('dist', {redirect: false}))
app.use('/', express.static('template'));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
