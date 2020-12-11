const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile('index.html');
});

app.get('/login', (request, response) => {
  response.send('Login page'); 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});