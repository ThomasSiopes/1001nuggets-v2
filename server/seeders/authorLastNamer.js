fs = require('fs');
var seed = 'authorSeeds C.json';
var m = JSON.parse(fs.readFileSync(seed).toString());
m.forEach(function(p){ 
    let wordArray = []
    // p.lastName = p.name.replace(/[^a-zA-Z0-9]/g, '');
    wordArray = p.name.split(" ");
    let lastEl = wordArray[wordArray.length-1]
    wordArray.splice((wordArray.length-1), 1);
    wordArray.unshift(lastEl);
    p.lastName = wordArray.join();
    p.lastName = p.lastName.replace(/[^a-zA-Z0-9]/g, '');
});
fs.writeFileSync(seed, JSON.stringify(m));