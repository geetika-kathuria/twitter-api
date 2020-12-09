'use strict';

var request = require("request");
var _ = require('lodash');

module.exports.profile = (event, context, callback) => {
    var output;
    var options = {
        method: 'GET',
        url: 'https://api.twitter.com/1.1/users/show.json?screen_name=geetikakathuria',
        contentType: 'application/json',
        headers: {
            "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAFcwFAEAAAAA5wz1GhbaUBNiNE7x%2BhMbbTyeGeM%3Dj5DRcN3jrwKMTLtxBTmdgq8P8c5swfgIqfCdFHQ9iM2CM1eg27"
        }
    };

    // fetch todo from the database

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(JSON.parse(body)),
        };
        callback(null, response);

    });


};

function getTwitterText(body) {
    var answer=[];
    var arrNew = JSON.parse(body);
    console.log(body);
    console.log(arrNew);

    // arrNew.forEach(function (arrNew) {
    //     var newJsonObj = {};
    //     newJsonObj['tweetText'] = arrNew.text;
    //     answer.push(newJsonObj);

    // });
    return body;
};