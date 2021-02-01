const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Route imports
const orgs = require('./server/routes/orgs');

app.use(express.json());
app.use(express.static('public')); 
app.use('/slds', express.static(__dirname + '/node_modules/@salesforce-ux/design-system/assets'));

app.get('/', (request, response) => {
  response.sendFile('index.html');
});

// Route use statements
app.use('/orgs', orgs);

app.get('/login', (request, response) => {
  response.send('Login page'); 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});