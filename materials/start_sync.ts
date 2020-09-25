export {};

// Synchronous
const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const records = parse(fs.readFileSync("./materials/input.csv"))
console.log(records)