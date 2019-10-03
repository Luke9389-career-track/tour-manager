/* eslint-disable new-cap */
const router = require('express').Router();
const Tour = require('../models/tour-model');
const addGeo = require('../middleware/add-geolocation');

router
  .get('/', (req, res, next) => {
    Tour.find()
      .lean()
      .then(tours => res.json(tours))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Tour.create(req.body)
      .then(tour => res.json(tour))
      .catch(next);
  })

  .post('/:id/stops', addGeo(), ({ params, body }, res, next) => {
    Tour.addStop(params.id, body)
      .then(stops => {
        console.log(stops);
        return res.json(stops);
      })
      .catch(next);

  });


module.exports = router;