var express = require('express')
const OAuth2Server = require('oauth2-server');

var app = express()
const Request = OAuth2Server.Request;
const Response = OAuth2Server.Response;

// http://localhost:3001/api/authen/request

// Routing
// app.use(require('./routes'));

// Build Oauth2
// Doc https://oauth2-server.readthedocs.io/en/latest/

const oauth = new OAuth2Server({
    model: require('./models.js')
});

let request = new Request({
    method: 'GET',
    query: {},
    headers: {Authorization: 'Bearer foobar'}
});

let response = new Response({
    headers: {}
});

oauth.authenticate(request, response)
.then((token) => {
    // The request was successfully authenticated.
    console.log('The request was successfully authenticated.')
})
.catch((err) => {
    // The request failed authentication.
    console.log('The request failed authentication.')
});

// Temporary store authentication session
// authenSession = {};

// Start server
var server = app.listen( process.env.PORT || 3002, function(){
    console.log('Listening on port ' + server.address().port);
});
