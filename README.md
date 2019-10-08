# LAB - 12

## Tour Manager

### Author: Luke Donahue

### Links and Resources
* [submission PR](https://github.com/Luke9389-career-track/tour-manager/pull/1)
* [travis](https://www.travis-ci.com/Luke9389-career-track/tour-manager/jobs/243611610)
* [back-end](https://dashboard.heroku.com/apps/peaceful-depths-36031)

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app

- Scripts:
   * "lint": "eslint .",
   * "pretest": "npm run lint",
   * "jest": "jest --runInBand --verbose",
   * "test": "npm run jest",
   * "test:watch": "npm run jest -- --watchAll",
   * "test:verbose": "npm run test -- --verbose",
   * "start": "node server.js",
   * "start:watch": "nodemon server.js"