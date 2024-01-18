const request = require("request");
//breedfetcher function to establish URL
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
//timeout
    if (response.statusCode !== 200) {
      
      return callback(null);
    }

    const info = JSON.parse(body);
//if breed not entered
    if (info.length === 0) {
      return callback(null);
    }
//callback if breed entered, return desc
    const desc = info[0].description;
    callback(null, desc);
  });
  
};


module.exports = fetchBreedDescription;

