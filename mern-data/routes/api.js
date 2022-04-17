const express = require('express');
const router = express.Router();
const Info = require('../models/info');

router.get('/infos', (req, res, next) => {
  // This will return all the data, exposing only the id and cust_name field to the client
  Info.find({}, "cust_name email")
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/infos', (req, res, next) => {
  if (req.body.cust_name) {
    Info.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/infos/:id', (req, res, next) => {
  Info.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;