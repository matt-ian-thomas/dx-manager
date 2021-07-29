const { request } = require('express');
const express = require('express');
const sfdx = require('sfdx-node/parallel');
const router = express.Router();
const path = require('path');
const scratchOrgConfig = path.resolve("config/project-scratch-def.json");

router.get('/', (request, response, next) => {
  sfdx.force.org.list()
    .then(orgs => {
      response.send(orgs);
    })
    .catch(error => response.error(error));
});

router.post('/', (request, response, next) => {
  console.log(request.body);
  console.log(scratchOrgConfig);
  sfdx.force.org.create({
    setalias: request.body.alias,
    definitionfile: scratchOrgConfig
  })
    .then(status => {
      response.send(status);
    })
    .catch(error => response.error(error));
});

module.exports = router;