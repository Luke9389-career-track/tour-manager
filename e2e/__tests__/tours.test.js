jest.mock('../../lib/services/maps-api.js');
const request = require('../request');
const db = require('../db');
// const { matchMongoId } = require('../match-helpers');
const getLocation = require('../../lib/services/maps-api');

getLocation.mockResolvedValue({
  latitude: 45.5266975,
  longitude: -122.6880503
});

describe('tours api', () => {
  beforeEach(() => {
    return db.dropCollection('tours');
  });

  const tour1 = {
    title: 'Thailand',
    activities: ['swimming', 'eating']
  };

  const tour2 = {
    title: 'Cambodia',
    activities: ['tuk-tuk', 'eating']
  };

  function postTour(tour) {
    return request
      .post('/api/tours')
      .send(tour)
      .expect(200)
      .then(({ body }) => body);
  }

  it('post a tour', () => {
    return postTour(tour1)
      .then(tour => {
        expect(tour).toEqual({
          ...tour,
          __v: 0,
          _id: expect.any(String)
        });
      });
  });

  it('gets some tours', () => {
    return Promise.all([
      postTour(tour1),
      postTour(tour2)
    ])
      .then(() => {
        return request
          .get('/api/tours')
          .expect(200);
      })
      .then(({ body }) => {
        expect(body.length).toBe(2);
      });
  });

  it('adding a stop gets a geolocation', () => {
    return postTour(tour1)
      .then((tour) => {
        return request
          .post(`/api/tours/${tour._id}/stops`)
          .send({
            address: 'Bangkok'
          });
      })
      .then((stop) => {
        console.log(stop.body);
      });
  });

});