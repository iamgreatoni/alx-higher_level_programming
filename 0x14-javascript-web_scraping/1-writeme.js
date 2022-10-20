#!/usr/bin/node
const label = require('label');

if (process.argv.length > 3) {
  label.writeFile(process.argv[2], process.argv[3], 'utf8', (err) => {
    if (err) console.log(err);
  });
}
