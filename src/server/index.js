var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(bodyParser.json()); // to use json

// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static('dist'));

console.log(__dirname);

// You could call it aylienapi, or anything else
var textapi = new aylien({
  application_key: process.env.API_KEY,
});

// API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

// POST Route
app.post('/api', async function (req, res) {
  userInput = req.body.url;
  console.log(`You entered: ${userInput}`);
  const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`;

  const response = await fetch(apiURL);
  const mcData = await response.json();
  console.log(mcData);
  res.send(mcData);
});
