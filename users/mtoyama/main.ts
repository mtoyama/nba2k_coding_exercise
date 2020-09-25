const papaparse = require('papaparse');
const {performance} = require('perf_hooks');
const fs = require('fs');
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { Player } from "./player";

function createAttributeArray(attStrings) {
    let attributeTupleArray = [];
    for (let value of attStrings) {
        let item = value.split("-");
        attributeTupleArray.push([parseInt(item[0]), parseInt(item[1])]);
    }
    return attributeTupleArray
}

var t0 = performance.now()
const file = fs.createReadStream("./materials/input.csv");
var index = 0;
var playerArray = [];
var maxAttributeInitial = 0;
var maxAttributeWCaps = 0;
papaparse.parse(file, {
    step: function(row) {
        if (index > 0) {
            let player = new Player(
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
            );
            playerArray.push(player);

            if (player.total_att_initial > maxAttributeInitial) {
                maxAttributeInitial = player.total_att_initial;
            }
            if (player.total_att_w_caps > maxAttributeWCaps) {
                maxAttributeWCaps = player.total_att_w_caps;
            }
        }
        index ++
    },
    error: function(err, file, inputElem, reason) {
        console.log(err, file, inputElem, reason);
    },
    complete: function() {
        var maxOverallRatingHelper = 0
        var maxAttributeEfficiencyHelper = 0
        var maxBadgeEfficiencyHelper = 0
        for (let player of playerArray) {
            player.overall_rating_helper = player.calculate_overall_rating_helper(maxAttributeInitial, maxAttributeWCaps)
            player.attribute_efficiency_helper = player.calculate_attribute_efficiency_helper(maxAttributeInitial, maxAttributeWCaps)

            if (player.overall_rating_helper > maxOverallRatingHelper) {
                maxOverallRatingHelper = player.overall_rating_helper;
            }

            if (player.attribute_efficiency_helper > maxAttributeEfficiencyHelper) {
                maxAttributeEfficiencyHelper = player.attribute_efficiency_helper;
            }

            if (player.badge_efficiency_helper > maxBadgeEfficiencyHelper) {
                maxBadgeEfficiencyHelper = player.badge_efficiency_helper;
            }
        }

        let data = []
        for (let player of playerArray) {
            player.overall_rating = (player.overall_rating_helper / maxOverallRatingHelper) * 100
            player.badge_efficiency = (player.badge_efficiency_helper / maxBadgeEfficiencyHelper) * 100
            player.attribute_efficiency = (player.attribute_efficiency_helper / maxAttributeEfficiencyHelper) * 100
            data.push(JSON.parse(JSON.stringify(player)))
        }
        let csv = papaparse.unparse(data)
        const outputFile = fs.writeFile("./output.csv", csv, (err) => {
            if (err) throw err;
            console.log("CSV written!");
            var t1 = performance.now();
            console.log("Program took " + (t1 - t0) / 1000 + " seconds");
        });
    }
})

