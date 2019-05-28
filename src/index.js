const app = require('express')();
const bodyParser = require("body-parser");

app.set('port', process.env.PORT || 3500)


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/index'))


app.listen(app.get('port'),() => {
  console.log('App runnig on port:', app.get('port'));
})
