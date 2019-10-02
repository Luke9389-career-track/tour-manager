const request = require('superagent');

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

