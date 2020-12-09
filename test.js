/*
File to test the lambda locally. See README.md for usage.
*/
const fs = require("fs");
const index = require("./index.js");

const body = {
    url: "https://admin.liftago.com/emails/attachments/receipts/gPW5XRhJqpQzO0BS/1005753771",
    // Another one (but note the token has limited validity so it may have expired already):
    // https://daruj.liftago.com/gift-voucher?t=MjE4NjQzNHwxNjA3NTg5NTY3ODQwfExOWEpoUVRPakotV1VUY3Vpdm0zMkJHXzlJYz0=
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
    if (err == null) {
        var pdfBase64 = JSON.parse(resp.body).pdfBase64;
        var pdf = Buffer.from(pdfBase64, "base64");
        fs.writeFileSync("out.pdf", pdf);
        console.log("Response written to out.pdf");
    }
}

index.handler(event, null, callback);
