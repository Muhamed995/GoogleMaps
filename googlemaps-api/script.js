
//let http= require ('http');
let url = require('url');
let NodeGeocoder = require('node-geocoder');
const express= require ('express');

const app = express();

app.get('/', (req,res)=>{

  let options = {
   provider: 'google',

   // Optional depending on the providers
   httpAdapter: 'https', // Default
   apiKey: 'AIzaSyAbyzHO5NtSnPu3i8qPORA0McFnQe4WF4c', // for Mapquest, OpenCage, Google Premier
   formatter: null         // 'gpx', 'string', ...
  };

  let geocoder = NodeGeocoder(options);
  let url_parts = url.parse(req.url, true);
  let query = url_parts.query;
  geocoder.reverse({lat:query.lat, lon:query.lon},((err, response)=> {
    res.statusCode=200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(JSON.stringify(response));
    //res.end(JSON.stringify(response));
}));

})



app.listen(3001, "127.0.0.1", ()=>{
  console.log('Server is running');
})
