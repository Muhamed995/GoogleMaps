import React from "react";
import ReactDOM from 'react-dom';
import GoogleMapsContainer from './App';
import {InfoWindow} from 'google-maps-react';

const newState= {
  myState:[{showingInfoWindow:false}]
}


const finalState=new InfoWindow(newState);
console.log(finalState.props.myState);

test('should open an InfoWindow', ()=>{
  const tmp = new InfoWindow({myState:[{showingInfoWindow:false}]})
expect(finalState.props.myState).toEqual(
  tmp.props.myState
);
})



test('to handle server not responding', ()=>{
  fetch('http://localhost:3001/?lat=' + 53.53+'&lon='+44.44).then(res=>{
    res = res.json();

    res.then((data)=>{
      let infoData = JSON.parse(data)
      expect(infoData[0].formattedAddress).toBe('string');
    })

  }).catch(err=>{
    expect(err).toBeInstanceOf(TypeError);
  });

})
