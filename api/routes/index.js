const express = require('express');
const Controller = require('../controllers/Universal');

const router = express.Router();

/* home page */
router.get('/', (req, res, next) => {
  res.json({
    title: 'Music and Movies Lit App',
    text: 'Welcome to Music and Movies Lit App',
  });
});

/* models page */
router.get('/:MODEL', Controller.read);

module.exports = router;
