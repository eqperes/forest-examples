const config = require('config');

module.exports = function (app) {
  app.use(require('forest-express-sequelize').init({
    modelsDir: __dirname + '/../models/',
    envSecret: config.get('forest.envSecret'),
    authSecret: config.get('forest.authSecret'),
    sequelize: app.get('sequelizeClient')
  }));
};
