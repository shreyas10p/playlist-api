const urlMetadata = require('url-metadata');
/*
* MODELS
* */
const responseModel = require('../models/Response');

//get meta data from you tube pages
exports.getYoutubeData = function(req, res, next) {
	let url = req.query.url;
  // console.log(req);
  console.log('fetching detail for url : '+url);

  urlMetadata(url).then(
  function (metadata) { // success handler
  	console.log(metadata);
  	var bodyData = {
  		title: metadata.title,
  		thumbnail: metadata.description,
  		duration: metadata.image,
  		description: metadata.keywords
  	};
  	res.send(responseModel.success('meta data received successfully', bodyData));
  },
  function (error) { // failure handler
  	res.send(responseModel.error('Error in receiving meta data', ''));
  })
};