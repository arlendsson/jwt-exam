/* LOAD THE DEPENDENCIES */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment')

/* LOAD THE CONFIG */
const config = require('./config')
const port = process.env.PORT || 3000

/* EXPRESS CONFIGURATION */
const app = express()

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// print the request log on console
app.use(morgan('dev'))

// set the secret key variable for JWT
app.set('jwt-secret', config.secret)

// index page, just for testing
app.get('/', (req, res) => {
  res.send('Hello JWT')
})

// configure api Router
app.use('/api', require('./routes/api'))
app.use('/board', require('./routes/board'))

app.listen(port, () => {
  console.log(`Express is running on port ${port}`)
})

const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connection;
db.on('err', console.error);
db.once('open', function() {
    console.log('mongodb connect');
});

const connect = mongoose.connect(config.mongodbUri);
// autoIncrement.initialize(mongoose.connection);
