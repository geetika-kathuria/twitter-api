'use strict';

var Twitter = require('twitter');
 
var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

module.exports.search = (event, context, callback) => {
    client.get('https://api.twitter.com/1.1/users/search.json', {q: event.pathParameters.text}, function(error, tweets, response) {
        if (error) {
            response = {
                statusCode: error.code,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(error),
            };
        }
        if (!error) {
        response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(tweets),
        };
        }
        callback(null, response);
      });
};
