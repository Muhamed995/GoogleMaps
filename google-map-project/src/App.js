import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

import {Provider} from 'react-redux';
import store from './store';




class GoogleMapsContainer extends React.Component {

  fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);

  }
  onMarkerClick = (props, marker, e) =>{
    console.log(marker.position.lat());
    console.log(marker.position.lng());

    fetch('http://localhost:3001/?lat=' + marker.position.lat()+'&lon='+marker.position.lng()).then(res=>{
      res = res.json();

      res.then((data)=>{
        let infoData = JSON.parse(data)
        console.log(infoData[0].formattedAddress);
        this.setState({
          selectedPlace: props,
          activeMarker:marker,
          showingInfoWindow: true,
          information:infoData[0].formattedAddress
        });
        console.log(data);
      })



    })
  }


  constructor(props){
    super(props);
    this.state={
      visibility:false,
      showingInfoWindow:false,
      activeMarker:{},

    }
  }




render(){
  let points = [
    { lat: 42.02, lng: -77.01 },
    { lat: 42.03, lng: -77.02 },
    { lat: 41.03, lng: -77.04 },
    { lat: 42.05, lng: -77.02 }
]


const data = {locations:[
    {name:'Dolores Park' , location:{lat:37.7596, lng:-122.4269}},
    {name:'Stockton' , location:{lat:37.9577, lng:-121.2908}},
    {name:'San Jose' , location:{lat:37.3382, lng:-121.8863}},
    {name:'Modesto' , location:{lat:37.6391, lng:-120.99688}}

  ]}

  const style = {
    width:'50vw',
    height:'75 vh'
  }
  return (
    <Provider store={store}>
    <div>
          <Map
           google={this.props.google}
           onReady={this.fetchPlaces}
           style={style}
           initialCenter = {{lat: 37.7749,lng: -122.4194}}
           zoom={8}
           >

        {  data.locations.map((location,i)=>(

          <Marker key={i}


            position={location.location}
            onClick={this.onMarkerClick}
            name={location.name}
          />



        ))}

        <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}>
        <div>
          <h1>{this.state.information}</h1>
      </div>
      </InfoWindow>



          </Map>
    </div>
    </Provider>
  );
}

}
export default GoogleApiWrapper({
    api: ('AIzaSyAbyzHO5NtSnPu3i8qPORA0McFnQe4WF4c')
})(GoogleMapsContainer)
