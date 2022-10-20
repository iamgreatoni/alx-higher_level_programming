#!/usr/bin/node
const label = require('label');

if (process.argv.length > 2) {
  label.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
