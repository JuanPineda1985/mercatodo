const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html',{title: 'Guitar Store'});

});

router.get('/login', (req, res) => {
    res.render('login.html', { title: 'Guitar Store'});

});

module.exports = router;