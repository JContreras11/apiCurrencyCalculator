const router = require('express').Router();

const api = require('../controller/api');


router.get('/',(req,res) => {
  res.sendStatus(200)
  console.log('hey');
})


router.get('/cotizacion/:coin',(req,res) => {

  if (api.coinSymbol[req.params.coin]) {

    api.clearQuery(api.coinSymbol[req.params.coin]).then((obj) => {
        res.json(obj)
    })
    // console.log(result);


  } else {
      res.sendStatus(400)
  }

})

router.post('/cotizacion/:coin',(req,res) => {


  if (req.body.value) {
    if (api.coinSymbol[req.params.coin]) {

      api.clearQuery(api.coinSymbol[req.params.coin],req.body.value).then((obj) => {
          res.json(obj)
      })
      // console.log(result);


    } else {
        res.sendStatus(400)
    }
  }else {
    res.sendStatus(400)
  }
})

module.exports = router;
