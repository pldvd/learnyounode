'use strict';
const myModule = require('./myModule');
const path = require('path');

myModule(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    data.forEach(elem => console.log(elem));
  }
})
