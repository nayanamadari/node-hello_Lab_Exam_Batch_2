const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Cloud Dveops! of cloud computing and devops and computer networks'))

var server = app.listen(3009, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;
