const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html',{title: 'Mercatodo'});

});

router.get('/login', (req, res) => {
    res.render('login.html', { title: 'Mercatodo'});

});

module.exports = router;