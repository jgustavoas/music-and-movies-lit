const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'Express', text: 'Welcome to Express' });
});

module.exports = router;
