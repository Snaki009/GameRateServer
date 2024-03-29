const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'GameRate API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `https://api.gamerate.pl:${config.port}/v1`,
    },
    {
      url: `http://localhost:${config.port}/v1`,
    }
  ],
};

module.exports = swaggerDef;
