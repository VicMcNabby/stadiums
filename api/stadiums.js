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
router.post('/', (req, res, next) => {
    queries.create(req.body)
    .then(stadiums => {
      res.json(stadiums[0])
    })
  })
  router.delete('/:id', (req, res, next) => {
    queries.delete(req.params.id).then(() => {
      res.json({
        deleted: true
      })
    })
  })




module.exports = router
