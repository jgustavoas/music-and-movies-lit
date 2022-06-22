const express = require('express');
const models = require('../models');

const router = express.Router();

/* home page */
router.get('/', (req, res, next) => {
  res.json({
    title: 'Music and Movies Lit App',
    text: 'Welcome to Music and Movies Lit App',
  });
});

/* models page */
router.get('/artists', async (req, res, next) => {
  try {
    const data = await models.artists.findAll({
      attributes: ['id', 'artist', 'genre_id', 'created_at', 'updated_at'],
    });
    res.json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
