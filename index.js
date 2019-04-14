var fs = require('fs');
var {calculate, invert } = require("./calculator");

var sourceFolder = "./coverage/";
var targetUrl = "http://localhost:65241/maintenance/colortheme";
var source = undefined;
var ranges = [];
fs.readdir(sourceFolder, (err, files) => {
    files.forEach(file => {
        var f = fs.readFileSync(sourceFolder + file, 'utf8');
        var data = JSON.parse(f);
        data.forEach(e => {
            if(e.url === targetUrl) {
                if(source === undefined) {
                    source = e.text;
                }
                ranges.push(...e.ranges);
            }
        });
    });

    var combinedRanges = calculate(ranges.map(r => [r.start, r.end]));
    var invertedRanges = invert(combinedRanges, source.length);

    invertedRanges.forEach((range) => {
        console.log(source.substring(range[0], range[1]));
    });
  });