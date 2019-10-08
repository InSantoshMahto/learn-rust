const express = require('express');
const router = express.Router();

// preparing routing pages.
const INDEX = 'index';
const ABOUT = 'about';
const CONTACT = 'contact';
const ERROR404 = '404';

/* ============================================================
-----------------default data for website using middleware ----
===============================================================*/

// for domain
let url = '';
router.use(function(req, res, next) {
  // to get domain
  let host = req.hostname;
  let protocol = req.protocol;
  url = protocol + '://' + host;
  next();
});

/* ===============================================================
------------------------Root routing------------------------------
=================================================================== */

// Home page
router.get('/', function(req, res) {
  res.render(INDEX, {
    domain: url,
    activeStatus: 'home',
    title: 'Wedding ONSI',
  });
});

// about page
router.get('/about', function(req, res) {
  res.render(ABOUT, {
    domain: url,
    activeStatus: 'about',
    title: 'About | Wedding ',
  });
});

// contact page
router.get('/contact', function(req, res) {
  res.render(CONTACT, {
    domain: url,
    activeStatus: 'contact',
    title: 'Contact | Wedding',
  });
});

/* GET 404 page. */
router.get('/*', function(req, res) {
  res.status(404).render(ERROR404, {
    domain: url,
    title: 'Error 404 | Wedding',
  });
});

module.exports = router;
