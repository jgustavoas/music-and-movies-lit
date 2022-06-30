/* eslint-disable class-methods-use-this */
const models = require('../models');
const options = require('../objects/options.obj');

class Controller {
  async create(req, res, next) {
    try {
      const { MODEL } = req.params;
      const data = await models[MODEL].create(req.body.data);

      res.json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async read(req, res, next) {
    try {
      const { MODEL } = req.params;
      const data = await models[MODEL].findAll(options[MODEL]);

      res.json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new Controller();
