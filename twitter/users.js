'use strict';

var request = require("request");
var _ = require('lodash');
const uuid = require('uuid');

// const oauth_timestamp = Math.floor(Date.now() / 1000);
// const oauth_nonce = "Gh0kUZsr4Oi";
// const outh_consumer_key = 'IJmRUASeQr2mAFRaXPIXmefRo';
// const outh_token= '946062656305278977-sqICwwagH8UAbKwDK8BhiL4bR0bGzEj';
// const encoded_oauth_signature = 'WF%2Bm1mVfgvrXwadd7Oe82rXwkUo%3D';
// const authorization_header1 = `OAuth oauth_consumer_key="${outh_consumer_key}",outh_token="${outh_token}",oauth_signature_method="HMAC-SHA1",oauth_timestamp="${oauth_timestamp}",oauth_nonce="${oauth_nonce}",oauth_version="1.0",oauth_signature="${encoded_oauth_signature}"`
// console.log(authorization_header1);
const authorization_header = 'OAuth oauth_consumer_key="IJmRUASeQr2mAFRaXPIXmefRo",oauth_token="946062656305278977-sqICwwagH8UAbKwDK8BhiL4bR0bGzEj",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1607484978",oauth_nonce="Gh0kUZsr4Oi",oauth_version="1.0",oauth_signature="WF%2Bm1mVfgvrXwadd7Oe82rXwkUo%3D';
console.log(authorization_header);

module.exports.search = (event, context, callback) => {
    var output;
    var options = {
        method: 'GET',
        url: 'https://api.twitter.com/1.1/users/search.json?q='+ event.pathParameters.text,
        contentType: 'application/json',
        headers: {
            "Authorization": authorization_header
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