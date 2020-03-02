const path = require('path');
const fs = require('fs');

// const request = require ('request')

let dataPath = path.join(__dirname, '../data.json');

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    let chirp = JSON.parse(data);

    chirp.chirp.forEach(chirp => {
        console.log(chirp.name);
        console.log(chirp.message);

    })
});
