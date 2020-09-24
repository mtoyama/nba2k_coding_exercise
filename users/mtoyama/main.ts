const papaparse = require('papaparse');
const fs = require('fs');
import { Player } from "./player";
// const player = require("./player.ts");

function createAttributeArray(attStrings) {
    let attributeTupleArray = [];
    for (let value of attStrings) {
        let item = value.split("-");
        attributeTupleArray.push([parseInt(item[0]), parseInt(item[1])]);
    }
    console.log(attributeTupleArray);
    return attributeTupleArray
}

const file = fs.createReadStream("./materials/input.csv");
var index = 0;
var playerArray = [];
papaparse.parse(file, {
    step: function(row) {
        console.log("Row:", row.data);
        if (row.data[0] != "POS") {
            playerArray.push(new Player(
                parseInt(row.data[0]),
                row.data[1],
                row.data[2],
                row.data[3],
                row.data[4],
                row.data[5],
                createAttributeArray(
                    [row.data[7], row.data[8], row.data[9],
                     row.data[10], row.data[11], row.data[12],
                     row.data[13], row.data[14], row.data[15],
                     row.data[16], row.data[17], row.data[18],
                     row.data[19], row.data[20], row.data[21],
                     row.data[22]]
                )
            ))
            console.log("Player added!")
        }
    },
    complete: function() {
        console.log("All done!");
        console.log(playerArray);
    }
});

