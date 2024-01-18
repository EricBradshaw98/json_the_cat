

const fetchBreedDescription = require("./breedFetcher");

//handle input from  user
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log(desc);
  }
 
});