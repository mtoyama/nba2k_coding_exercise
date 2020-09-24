const papaparse = require('papaparse');
const fs = require('fs');

const file = fs.createReadStream("./materials/input.csv");

papaparse.parse(file, {
    step: function(row) {
        console.log("Row:", row.data);
    },
    complete: function() {
        console.log("All done!");
    }
});