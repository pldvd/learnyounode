'use strict'

const fs = require('fs');
const path = require('path');
 
const filterFileNames = (location, extension, callback) => {
  const ending = `.${extension}`;
  fs.readdir(location, 'utf8', (err, data) => {
    if (err) return callback(err);
    callback(null, data.filter(elem => path.extname(elem) == ending))
  })
}

module.exports = filterFileNames;

//console.log(process.argv.slice(2));
// const fs = require('fs');
// const path = require('path');

// const filterFiles = (folderName, extension) => {
//   let extName = '.' + extension;
//   fs.readdir(folderName, (err, list) => {
//     if (err) return console.log(err);
//     list.forEach(elem => {
//       if(path.extname(elem) == extName) {
//         console.log(elem);
//       }
//     });
//   })
// }

// filterFiles(process.argv[2], process.argv[3]);