AWS.config.update({
    accessKeyId : 'AKIAJ3K5YYG7L4OYFKOA' ,
    secretAccessKey : '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'
});
AWS.config.region = 'us-east-1';
$(document).ready(function() { 
$("#fileUploadForm").ajaxForm(function(e) {
var bucket = new AWS.S3({params: {Bucket: 'ritishtestwebsite', ACL: 'public-read'}});
var fileChooser = document.getElementById('file');
var file = fileChooser.files[0];

console.log(file.name);
if (file) {

var params = {Key: file.name, ContentType: file.type, Body: file};
bucket.upload(params).on('httpUploadProgress', function(evt) {
//console.log("Uploaded :: " + parseInt((evt.loaded * 100) / evt.total)+'%');
if(parseInt((evt.loaded * 100) / evt.total) > 25){
console.log( parseInt((evt.loaded * 100) / evt.total));
}
console.log('width',parseInt((evt.loaded * 100) / evt.total)+'%');

}).send(function(err, data) {
console.log(data);
});
}

return false;
});})