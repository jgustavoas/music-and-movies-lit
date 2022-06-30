const express = require('express');
const { create, read, update } = require('../controllers/Universal');

const router = express.Router();

/* home page */
router.get('/', (req, res, next) => {
  res.json({
    title: 'Music and Movies Lit App',
    text: 'Welcome to Music and Movies Lit App',
  });
});

/* models page */
router.post('/:MODEL', create);
router.get('/:MODEL', read);
router.patch('/:MODEL/:ID', update);

module.exports = router;
