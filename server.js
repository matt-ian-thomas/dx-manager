const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); 
app.use('/slds', express.static(__dirname + '/node_modules/@salesforce-ux/design-system/assets'));

app.get('/', (request, response) => {
  response.sendFile('index.html');
});

app.get('/login', (request, response) => {
  response.send('Login page'); 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});