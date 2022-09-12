fs = require('fs');
var seed = 'authorSeeds.json';
var m = JSON.parse(fs.readFileSync(seed).toString());
m.forEach(function(p){ 
    p.realID = p.name.replace(/[^a-zA-Z0-9]/g, '');
});
fs.writeFileSync(seed, JSON.stringify(m));