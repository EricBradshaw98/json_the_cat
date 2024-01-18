const request = require('request');


// check if a breed name is provided as a command-line argument
const breedName = process.argv[2];

if (!breedName) {
  console.error('Please provide a breed name as a command-line argument.');
  process.exit(1); // Exit with an error code
}

//api endpoint to search breed
const  apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
// change url to specify breed name with command line arg
//get request to api
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    //parse json response
    const breedInfo = JSON.parse(body);

    //check if response is an array and not empty
    if (Array.isArray(breedInfo) && breedInfo.length > 0) {
      //info about the breed here
      console.log(breedInfo[0].description);
      
    } else {
      console.error("No Information found for this breed.");
    }
  }

});

