const fetch = require('node-fetch');

class Api {
  constructor() {

    this.coinSymbol = {
      'dolar': 'USD',
      'euro': 'EUR',
      'real': 'BRL',
    }

    this.flags = {
      'USD': '🇺🇸',
      'EUR': '🇪🇺',
      'BRL': '🇧🇷',
    }

    this.baseApi=`https://api.cambio.today/v1/quotes/`
    this.format=`json`
    this.quantity=`1`
    this.apiKey = `2059|H0xieD3g0JmXQnZaHHL8G_Mkt48ZzTNp`
  }

  clearQuery(coin,amount){

    const _this = this

    var res = new Array();

    if (amount != null) {
      this.quantity = amount
    }else {
      this.quantity = '1'
    }

    for (var item in this.coinSymbol){
      res.push(this.send(coin,this.coinSymbol[item]))
    }

    return new Promise((resolve) => {
        Promise.all(res).then((obj) => {

          var res = new Array();
          obj.forEach(function (item,i) {
            res.push({
              'key': i,
              'moneda': item.result.target,
              'precio': item.result.amount,
              'flag': _this.flags[item.result.target],
              'lastUpdate': item.result.updated,
            })
          })

          resolve(res);
        })
    })


  }


  send(source,target){
    return new Promise((res,rej) => {
      fetch(`${this.baseApi}${source}/${target}/${this.format}?quantity=${this.quantity}&key=${this.apiKey}`).then((query) => {
          res(query.json())
      })
    })
  }


}



module.exports = new Api();
