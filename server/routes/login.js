const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

router.get('/', (request, response, next) => {
  const url = '';
  exec(`sfdx force:auth:web:login -r ${url}`, (error, stdout, stderr) => {
    if(error) {
      next(error);
    }
    else if (stderr) {
      next(stderr);
    }
    else {
      response.send(stdout);
    }
  });
});

module.exports = router;