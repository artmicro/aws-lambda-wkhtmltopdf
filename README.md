# aws-lambda-wkhtmltopdf

## To update wkhtmltopdf:

1. Download "lambda zip" from https://wkhtmltopdf.org/downloads.html.
2. Delete bin, fonts and lib, but preserve fonts/liftago.
3. Unzip the lambda zip in this directory.

Use ./build to build a distribution zip.

Use ./deploy to update the lambda to the zip built above.

## To test the lambda locally:

There is a Docker file that creates an environment similar to that of AWS Lambda:

```
docker build --tag wkhtmltopdf-test .
```

A container ran from this image will run `test.js`:

```
docker run --rm -v $PWD:/var/task wkhtmltopdf-test
```
