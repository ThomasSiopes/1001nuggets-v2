fs = require('fs');
var seed = 'quoteSeeds.json';
var m = JSON.parse(fs.readFileSync(seed).toString());
var previousAuthor = null;
var counter = 0;
m.forEach(function(p){
    console.log(p.author.replace(/[^a-zA-Z0-9]/g, '-'));
    if(previousAuthor) {
        if(p.author === previousAuthor) {
            counter++;
        }
        else {
            counter = 0;
        }
    }
    else {
        counter = 0;
    }
    p.realID = p.author.replace(/[^a-zA-Z0-9]/g, '-') + "-" + counter;
    previousAuthor = p.author;
});
fs.writeFileSync(seed, JSON.stringify(m));