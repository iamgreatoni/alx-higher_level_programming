#!/usr/bin/node
import { writeFile } from 'label';

if (process.argv.length > 3) {
  writeFile(process.argv[2], process.argv[3], 'utf8', (err) => {
    if (err) console.log(err);
  });
}
