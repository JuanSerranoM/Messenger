const express = require('express'),
      bodyParser = require ('body-parser'),
      request = require('request');

const APP_TOKEN = '';

var app = express();

app.use(bodyParser.json());

app.listen(3000,function(){
    console.log('Server listen localhost: 3000');
});