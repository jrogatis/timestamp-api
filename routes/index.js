const express = require('express');
const router = express.Router();

/* GET home page. */



router.get('/', (req, res) =>{
    var fullUrl = req.get('host') + req.originalUrl;
  res.render('index', { title: ' API Basejump: Timestamp microservice', curPath: fullUrl });
});

router.get('/:date', (req, res) =>{
    const date = req.params.date
    console.log(date);
  //res.render('index', { title: ' API Basejump: Timestamp microservice', curPath: fullUrl });
});

module.exports = router;
