const express = require('express');
const winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'info' }),
      new (winston.transports.File)({ filename: 'app.log', level: 'debug' })
    ]
  });

logger.info('hola !');
logger.debug('debug message !');

var app = express();

var index = require('./routes/index');


app.use('/', index);

app.listen(8080,function(){
	console.log("Server up and running on port 8080.");
});