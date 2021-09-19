const express = require("express");
const fs = require('fs');

const app = express();
console.log('Server: OK')

app.get('/users',  (req, res) => {
  fs.readFile('data/users.json', 'utf-8', (err, jsonString) => {
    if (err) throw err;
    try {
      console.log(`statusCode: ${res.statusCode}`)
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(jsonString)
    } catch (err) {throw err}
  });

})

app.listen(3000)