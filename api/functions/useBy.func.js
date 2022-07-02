const OPTIONS = require('../objects/options.obj');

/*
  Check wich model has the column indicated by the parameter "req.query.by" to sort the table.
  
  Examples: 
  BASE_URL/albums?by=album
  BASE_URL/tracks?by=artist&sort=DESC  
*/
module.exports = function useBy(req) {
  const { MODEL } = req.params;
  const { by, sort } = req.query;
  const BY = [by, sort || 'ASC'];

  if (!by) return null;

  OPTIONS[MODEL].include.forEach((inc) => {
    if (inc.attributes.includes(by)) BY.splice(0, 0, inc);
  });

  return [BY];
};
