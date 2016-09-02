const express = require('express');
const router = express.Router();

/* GET home page. */

const isDate = (date) => {
    return ( (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) ));
};

router.get('/', (req, res) =>{
    var fullUrl = req.get('host') + req.originalUrl;
  res.render('index', { title: ' API Basejump: Timestamp microservice', curPath: fullUrl });
});

router.get('/:date', (req, res) =>{
    let date = req.params.date

    console.log(isDate(date))
    if (isDate(date) === true) {
        date = new Date(date);
          res.end(`"unix:" ${(date.getTime()/1000).toFixed(0)} "natural" ${date}`);
    } else {

        res.end('')
    }

});

module.exports = router;
