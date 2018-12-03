import React, { Component } from 'react';
import { GoogleMap, withScriptjs, Marker, withGoogleMap } from "react-google-maps"

const tutorialSteps = [

    {
        lat: 31.5773408, lng: 74.3504352, key: 1
    },
    {
        lat: 31.5785229, lng: 74.3508027, key: 2
    },
    {
        lat: 31.580028, lng: 74.351224, key: 3
    }
];
class Maps extends Component {
    render() {
        return (
            <GoogleMap
                defaultZoom={18}
                defaultCenter={{ lat: 31.580028, lng: 74.351224 }}>
                
            </ GoogleMap>
        )
    }
}
export default withScriptjs(withGoogleMap(Maps))
/*{tutorialSteps.map((item)=>( <Marker position={{ lat: item.lat, lng:  item.lng}}/>))}
{props.markers.map(marker => (
    <Marker
      key={marker.name}
      position={{ lat: marker.latitude, lng: marker.longitude }}
      onClick={this.onToggleOpen}
    >
    {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}> marker.key </InfoWindow>}
    </Marker>
  ))}
  {tutorialSteps.map((item,index)=>( <Marker key={index} position={{ lat: item.lat, lng:  item.lng}}>{<InfoWindow >qaim </InfoWindow>}</Marker>))}//*/