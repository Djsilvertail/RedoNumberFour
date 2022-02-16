const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/ta06', {
      title: 'Ta06',
      path: '/thing', // For pug, EJS
      activeTA04: true, // For HBS
      contentCSS: true, // For HBS
    });
  });

  module.exports = router;