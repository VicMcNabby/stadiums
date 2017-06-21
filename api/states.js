const express = require('express');

const router = express.Router();

const queries = require('../db/queries')

router.get('/', (req, res, next) => {
  queries.getAll().then(states => {
    res.json(states)
  })
})
router.get("/:id", function(request, response, next) {
  queries.getState(request.params.id)
    .then(state => {
      response.json(state);
    });
});
router.get("/:id/stadiums", function(request, response, next) {
  queries.getStadiumsByState(request.params.id)
    .then(function(stadiums) {
      response.json(stadiums);
    });
});

module.exports = router
