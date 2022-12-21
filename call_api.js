const request = require('request');

//call api
function call_api(finishedAPI, ticker) {
    request('https://api.iex.cloud/stable/stock/' + ticker + '/quote?token=sk_1e52d334a01f40309fe157fc217fe8e2', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        if (res.statusCode === 200) {
            finishedAPI(body);
        };
        console.log(finishedAPI);
    });
}
exports.call_api = call_api;
