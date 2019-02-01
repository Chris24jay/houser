const express = require('express');
require('dotenv').config();
const massive = require('massive');
const bodyParser = require('body-parser');
const ctrl = require('./controller');

const app = express()

massive(process.env.CONNECTION_STRING)
.then((datab) => {app.set('db', datab)})
.catch((err) => console.log(err))

//middleware
app.use(bodyParser.json())

//endpoints


//server port listening
const PORT = process.env.SERVER_PORT
app.listen(PORT, () => console.log(`Firing up at port:${PORT}`))
