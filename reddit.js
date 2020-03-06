const path = require('path');
const fs = require('fs');
const request = require('request');
let dataPath = path.join(__dirname, '../popular-articles.json');

request('https://reddit.com/r/popular.json', function (error, res, body) {
    // in addition to parsing the value, deal with possible errors
    if (error) {
        console.log(error);
    };
    JSON.parse(body).data.children.forEach(item => {
        console.log(item.data.title, item.data.url, item.data.author);
    });
    fs.writeFile(dataPath, res.body, error => {
        if (error) {
            console.log(error);
        }
    });
});

// const fetch = require('node-fetch');

// fetch('https://reddit.com/r/popular.json')
//     .then(data => popular - articles.json())
//     .then(data => {
//         JSON.parse(body).data.children.forEach(item => {
//             // console.log(item.data.title);
//             console.log(
//                 item.data.title,
//                 item.data.url,
//                 item.data.author
//             )
//         });
//     })
//     .then(info => {
//         fs.writeFile(dataPath, res.body, error => {
//             if (error) {
//                 console.log(error);
//             }
//         })
//             .catch(error => {
//                 error = 'Could not find information'
//             })



// var rp = require('request-promise');

// rp('https://reddit.com/r/popular.json'
//     .then(function (response) {
//         // resolved
//     })
//     .catch(function (err) {
//         // rejected
//     });