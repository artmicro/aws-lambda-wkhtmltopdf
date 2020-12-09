var wkhtmltopdf = require('wkhtmltopdf');
var MemoryStream = require('memorystream');

process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'] + "/bin";
process.env['LD_LIBRARY_PATH'] = process.env['LAMBDA_TASK_ROOT'] + "/lib";
process.env['FONTCONFIG_PATH'] = process.env['LAMBDA_TASK_ROOT'] + "/fonts";

exports.handler = function(event, context, callback) {
    var body = JSON.parse(event.body);
    var memStream = new MemoryStream();
    var content;
    if (body.htmlBase64 != null) {
        content = new Buffer(body.htmlBase64, 'base64').toString('utf8');
    } else {
        content = body.url;
    }
    wkhtmltopdf(content, body.options, function(err) {
        if (err != null) {
            callback(err, null);
        } else {
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    pdfBase64: memStream.read().toString('base64'),
                    options: body.options
                })
            }
            callback(null, response);
        }
    }).pipe(memStream);
};
