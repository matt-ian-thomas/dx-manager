const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); 
app.use('/slds', express.static(__dirname + '/node_modules/@salesforce-ux/design-system/assets'));

app.get('/', (request, response) => {
  response.sendFile('index.html');
});

app.get('/login', (request, response) => {
  response.send('Login page'); 
});

app.get('/orgs', (request, response) => {
  exec("sfdx force:org:list", (error, stdout, stderr) => {
    if(error) {
      console.log(error);
      return;
    }
    else if (stderr) {
      console.log(stderr);
      return;
    }
    else {
      return stdout;
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});