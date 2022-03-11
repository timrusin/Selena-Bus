require('dotenv').config()
require('./models/Score')
const express = require ('express');
const mongoose = require ('mongoose')
const bodyParser = require('body-parser')
const scoreRoutes = require('./routes/scoreRoutes')


const app = express();

app.use(bodyParser.json());
app.use(scoreRoutes);

const mongoUri = process.env.DATABASE_URL
mongoose.connect(mongoUri)

mongoose.connection.on('connected', ()=> {
    console.log('connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err)
})

app.get('/',(req,res) => {
    res.send('Hi there!')
});

app.listen(3000, () => {
    console.log('listening on port 3000')
})