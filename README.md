# LAB - 12

## Tour Manager

### Author: Luke Donahue

### Links and Resources
* [submission PR]()
* [travis]()
* [back-end]()

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
   * "test:coverage": "npm run test -- --coverage",
   * "test:watch": "npm run jest -- --watchAll",
   * "test:verbose": "npm run test -- --verbose",
   * "start": "node server.js",
   * "start:watch": "nodemon server.js"