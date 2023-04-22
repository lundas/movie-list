const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const controller = require('./controller');

app.use(express.static('client/dist'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

/// routing here -> controller
app.get('/api/movies', controller.get);

app.post('/api/movies', controller.post);

app.put('/api/movies', controller.put);

app.use((req, res) => {
  res.end('Hello, World!');
});