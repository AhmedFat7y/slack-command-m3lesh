const request = require('request');
const queryString  = require('querystring');

exports.handler = (event, context, callback) => {
  console.log('Event data', event);
  console.log('Context data', context);
  callback(null, {
    statusCode: 200,
  });
  let params = queryString.parse(event.body);
  request({
    uri:  params.response_url,
    method: 'POST',
    body: {
      'response_type': 'in_channel',
      'attachments': [
        {
          'pretext': 'معلش' + (params.text || ''),
          'image_url': 'https://i.imgur.com/hm7YJDH.jpg',
        }
      ],
    },
    json: true,
  }, (err, res, body) => {
    console.log('Error:', err);
    console.log('Body:', body);
  })
};