// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => console.log('Return Value: ', breed);

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);