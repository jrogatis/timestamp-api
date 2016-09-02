const express = require('express');
const moment = require('moment');
const router = express.Router();

router.get('/', (req, res) =>{
    var fullUrl = req.get('host') + req.originalUrl;
  res.render('index', { title: ' API Basejump: Timestamp microservice', curPath: fullUrl });
});

router.get('/:date', (req, res) =>{
    let date = req.params.date
    console.log(moment(date, 'MMM D,YYYY', true).isValid())

    if (isNaN(date) && moment(date, 'MMM D,YYYY').isValid() ) {
         res.end(`{"unix:" ${moment(date).format('X')}, "natural" ${moment(date).format('MMMM DD,YYYY')}}`);
    } else if ( !isNaN(date) ) {

           res.end(`{"unix:" ${date}, "natural" ${moment(date).format('MMMM DD,YYYY')}}`);
    }  else {

        res.end('')
    }

});

module.exports = router;
