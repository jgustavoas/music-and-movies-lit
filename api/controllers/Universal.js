/* eslint-disable class-methods-use-this */
const models = require('../models');
const useWhere = require('../functions/useWhere.func');
const useOrder = require('../functions/useOrder.func');
const cleanUp = require('../functions/cleanUp.func');
const options = require('../objects/options.obj');

class Controller {
  async Create(req, res, next) {
    try {
      const { MODEL } = req.params;
      const data = await models[MODEL].create(req.body.data);

      res.json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async Read(req, res, next) {
    try {
      const { MODEL } = req.params;
      const { offset, limit } = req.query;
      const { include } = options[MODEL];

      if (include) cleanUp(include);

      const data = await models[MODEL].findAll({
        ...options[MODEL],
        where: useWhere(req),
        order: useOrder(req),
        offset,
        limit,
      });

      res.json(data);
    } catch (error) {
      console.log('error :>> ', error);
      res.status(400).json(error);
    }
  }

  async Update(req, res, next) {
    try {
      const { MODEL, ID } = req.params;
      const where = { id: +ID };
      const data = await models[MODEL].update(req.body.data, { where });

      res.json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async Delete(req, res, next) {
    try {
      const { MODEL, ID } = req.params;
      const where = { id: +ID };
      const data = await models[MODEL].destroy({ where });

      res.json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new Controller();
