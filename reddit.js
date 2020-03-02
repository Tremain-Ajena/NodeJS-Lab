function parse(){
    return new Promise(function(resolve, reject){
        request('https://reddit.com/r/popular.json', function (error, response, body) {
            // in addition to parsing the value, deal with possible errors
            if (error) return reject(error);
            try {
                // JSON.parse() can throw an exception if not valid JSON
                resolve(JSON.parse(body).data.available_balance);
            } catch(e) {
                reject(e);
            }
        });
    });
}



var rp = require('request-promise');

rp('https://reddit.com/r/popular.json'
    .then(function (response) {
        // resolved
    })
    .catch(function (err) {
        // rejected
    });