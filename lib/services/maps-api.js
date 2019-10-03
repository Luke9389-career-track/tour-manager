const request = require('superagent');

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

module.exports = function getLocation(search) {
  return request
    .get(BASE_URL)
    .query({ address: search })
    .query({ key: GEOCODE_API_KEY })
    .then(res => {
      return toLocation(res.body, search);
    });
};

function toLocation(geoData) {
  const firstResult = geoData.results[0];
  const geometry = firstResult.geometry;

  return {
    latitude: geometry.location.lat,
    longitude: geometry.location.lng
  };
}