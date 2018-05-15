//let http= require ('http');
let url = require('url');
const express= require ('express');
let getGoogleMapData = require('./script.js');
const app = express();

app.get('/', (req,res)=>{
  let url_parts = url.parse(req.url, true);
  let query = url_parts.query;
  getGoogleMapData(query.lat,query.lon,res);
});


app.listen(3001, "127.0.0.1", ()=>{
  console.log('Server is running');
});
