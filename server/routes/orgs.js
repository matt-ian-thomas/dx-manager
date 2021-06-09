const express = require('express');
const sfdx = require('sfdx-node');
const router = express.Router();

router.get('/', (request, response, next) => {
  sfdx.force.org.list()
    .then(orgs => {
      response.send(orgs);
      console.log(orgs);
    })
    .catch(error => response.error(error));
});

module.exports = router;