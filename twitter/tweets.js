"use strict";

var request = require("request");

module.exports.search = (event, context, callback) => {
  var options = {
    method: "GET",
    url: process.env.BASE_URL_TWEETS +
      event.pathParameters.text +
      "&count=5",
    contentType: "application/json",
    headers: {
      Authorization: process.env.BEARER_TOKEN
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(getTwitterText(body))
    };
    callback(null, response);
  });
};

function getTwitterText(body) {
  var answer = [];
  var arrNew = JSON.parse(body);

  arrNew.forEach(function (arrNew) {
    var newJsonObj = {};
    newJsonObj["tweetText"] = arrNew.text;
    answer.push(newJsonObj);
  });
  return answer;
}