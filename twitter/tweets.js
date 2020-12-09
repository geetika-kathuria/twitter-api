'use strict';

var request = require("request");
var _ = require('lodash');

module.exports.search = (event, context, callback) => {
    var output;
    var options = {
        method: 'GET',
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=dealsfront&count=5',
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
            body: JSON.stringify(getTwitterText(body)),
        };
        callback(null, response);

    });


};

function getTwitterText(body) {
    var answer=[];
    var arrNew = JSON.parse(body);


    arrNew.forEach(function (arrNew) {
        var newJsonObj = {};
        newJsonObj['tweetText'] = arrNew.text;
        answer.push(newJsonObj);

    });
    return answer;
};