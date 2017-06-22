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
router.post('/:id/stadiums', function(req, res, next) {
  queries.create({
    name: req.body.name,
    team: req.body.team,
    type: req.body.type,
    photo: req.body.photo,
    capacity: req.body.capacity,
    state_id: req.body.state_id
  }).then(function(result) {
    res.json(result);
  });
});

module.exports = router
