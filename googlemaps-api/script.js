let NodeGeocoder = require('node-geocoder');
function getGoogleMapData(lat,lon,res = null){
  let options = {
   provider: 'google',
   // Optional depending on the providers
   httpAdapter: 'https', // Default
   apiKey: 'AIzaSyAbyzHO5NtSnPu3i8qPORA0McFnQe4WF4c', // for Mapquest, OpenCage, Google Premier
   formatter: null         // 'gpx', 'string', ...
  };

  let geocoder = NodeGeocoder(options);
  if(res){
    geocoder.reverse({lat:lat, lon:lon},((err, response)=> {
        res.statusCode=200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(JSON.stringify(response));
    }));
  }
  else{
    return new Promise((resolve,reject)=>{
        geocoder.reverse({lat:lat,lon:lon}).then((err,response) => {
          if(err)
            resolve(err);
          else
            resolve(response);
        }).catch((err)=>{
          resolve(false);
        });
      });
  }
}

module.exports = getGoogleMapData;
