/*
File to test the lambda locally. Call with `node test.js`.
*/
const index = require('./index.js');

const body = {
    // The URL of the HTML to be rendered. Note the token has limited validity, so ths one many be expired already.
    url: "https://daruj.liftago.com/gift-voucher?t=MjE4NjQzNHwxNjA3NTg5NTY3ODQwfExOWEpoUVRPakotV1VUY3Vpdm0zMkJHXzlJYz0=",
    options: {
      "pageSize": "A4",
      "orientation": "Portrait"
    }
}
const event = {
    body: JSON.stringify(body)
}

const callback = function(err, resp) {
    console.log("Callback error:", err);
    console.log("Callback response:", resp);
}

index.handler(event, null, callback);
