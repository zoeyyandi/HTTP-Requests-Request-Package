var request = require('request');
var fs = require('fs');

console.log('Downloading image...');
request.get('https://sytantris.github.io/http-examples/future.jpg')
.on('error', function(error) {
  throw error;
})
.on('response', function(response) {
  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Status Message: ', response.statusMessage);
  console.log('Content Type: ', response.headers['content-type']);
})
.on('end', function() {
  console.log('Download complete.');
})
.pipe(fs.createWriteStream('./future.jpg'))

