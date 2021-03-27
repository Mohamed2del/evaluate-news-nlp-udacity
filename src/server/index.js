const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js');

// Start up an instance of app
const app = express();

// Cors allows the browser and server to communicate without any security interruptions
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

console.log(__dirname);

// API
const URL = 'https://api.meaningcloud.com/sentiment-2.1?';
// api key from the .env
const apiKey = process.env.API_KEY;

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
  //res.sendFile(path.resolve('src/client/views/index.html'))
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

// POST Route for get the analysis
app.post('/article', async function (req, res) {
  // user input and generate the url that is going to be sent to the api
  input = req.body.url;
  const apiURL = `${URL}key=${apiKey}&url=${input}&lang=en`;

  // respone that coming from fethc
  const response = await fetch(apiURL);
  // convert response into json

  const dataFromResponse = await response.json();

  // send the data from respone as json to the client
  res.send(dataFromResponse);
});

// this 8081 and client is on 8080
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
