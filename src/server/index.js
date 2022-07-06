//import axios
const axios = require('axios');
var bodyParser = require('body-parser')

const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js');
const { response } = require('express');

const app = express()

app.use(express.static('dist'))

app.use(bodyParser.json())

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    })


  app.post('/', function (req, res) {
    let inputstring = req.body;

    console.log(req.body);

    const formdata = new URLSearchParams();
    formdata.append("key", process.env.API_KEY);
    formdata.append("txt",  inputstring.key);
    formdata.append("lang", "fr");  // 2-letter code, like en es fr ...

    console.log(formdata);

    //get api key from .env

    //convert formdata to js

    //key test
   
    
    let key = process.env.API_KEY;;
    const requestOptions = {
      method: 'POST',
      data: formdata,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      redirect: 'follow',
      url: "https://api.meaningcloud.com/sentiment-2.1"
    };

    const reponse = axios.request(requestOptions)
       //.then(response => ({
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
        
       })
       console.log(response);
       res.send(reponse);

    })

    