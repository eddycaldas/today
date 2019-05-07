const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const path = require('path')

router.get('/', (req, res) => {
  queries
    .article 
    .getAll()
  .then(allInfo => {
    res.json(allInfo)
  })
})


module.exports = router