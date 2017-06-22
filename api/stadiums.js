const express = require('express');

const router = express.Router();

const queries = require('../db/queries')

router.get('/', (req, res, next) => {
  queries.getStadiums().then(stadiums => {
    res.json(stadiums)
  })
})
router.get("/:id", (request, response, next) => {
  queries.getStadium(request.params.id)
    .then((stadium) => {
      response.json(stadium);
    });
});
router.delete('/:id', (req, res, next) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    })
  })
})
router.post('/', function(req, res, next) {
  queries.create({
    name: req.body.name,
    team: req.body.team,
    sport: req.body.sport,
    photo: req.body.photo,
    capacity: req.body.capacity,
    state_id: req.body.state_id
  }).then(function(result) {
    res.json(result);
  });
});




module.exports = router
