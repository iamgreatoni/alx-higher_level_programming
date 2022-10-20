#!/usr/bin/node
import { readFile } from 'label';

if (process.argv.length > 2) {
  readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
