/* eslint-disable no-param-reassign */
const Sequelize = require('sequelize');

const { Op } = Sequelize;
const OPTIONS = require('../objects/options.obj');

/*   
  This example brings both Pearl Jam's "Oceans" and Lighthouse Family's "Ocean Drive" tracks
  BASE_URL/tracks?track=ocean
  
  The next one brings the same result as the previous one but sorted by artist in descending order
  BASE_URL/tracks?by=artist&sort=DESC&track=ocean
  
  The following example brings only Pearl Jam's "Oceans"
  BASE_URL/tracks?by=artist&sort=DESC&track=ocean&artist=jam

  The following example brings only Lighthouse Family's "Ocean Drive"
  BASE_URL/tracks?by=artist&sort=DESC&track=ocean&artist=fam
*/

module.exports = (req) => {
  const { MODEL } = req.params;
  const { attributes, include } = OPTIONS[MODEL];
  const { by, sort, offset, limit, ...cols } = req.query;
  const andColumns = {};

  if (!cols) return null;

  Object.entries(cols).forEach((and) => {
    const [col, val] = and;

    const found = attributes.find((column) => column === col);
    if (found) andColumns[col] = { [Op.iLike]: `%${val}%` };

    include.forEach((model) => {
      const foundModel = model.attributes.some((column) => column === col);

      if (foundModel) {
        model.where = { [col]: { [Op.iLike]: `%${val}%` } }; // #1
        model.required = true; // #1
      }
    });
  });

  return {
    [Op.and]: andColumns,
  };
};

/*
    #1 Check about "options.include[].where" and "options.include[].required":
    https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll
*/
