'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// For when we do auth stuff in the future
const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
    issuer: "{YOUR-AUTH0-DOMAIN}",
    algorithms: ['RS256']
});

app.get('/api/sound/:sound_id', (req,res) => {
  // fetch sound from db with req.params.sound_id

})

app.post('/api/sound/:sound_id', (req,res) => {
  // put the sound in S3
  // create DB entry for sound
})

app.listen(3333);
console.log('Listening on localhost:3333');
