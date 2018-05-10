var params = {
  Bucket: 'ritishtest2',
  Fields: {
    key: 'encryption/kms.txt'
  }
};
s3.createPresignedPost(params, function(err, data) {
  if (err) {
    console.error('Presigning post data encountered an error', err);
  } else {
    console.log('The post data is', data);
  }
})
