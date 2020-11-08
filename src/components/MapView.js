import React, { useState } from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import Markers from './Markers'

import { places } from '../assets/data.json'
import { Icon } from 'leaflet';

console.log(places[0].geometry);

const icon = new Icon({
  iconUrl: '../assets/icon.svg',
  iconSize: [25, 25]
})

console.log(icon)
export const MapView = () => {

  const [state, setState] = useState({
    currentLocation: { lat: '52.52437', lng: '13.41053' },
    zoom: 13,
    name: null
  })

  console.log('====>', state.name)

  // const [ activeName, setActiveName] = useState(places[0].name)

  // console.log('XXXXXXXXXXXXXX', activeName)

  return (
    <MapContainer center={ state.currentLocation } zoom={ state.zoom }>
      <TileLayer 
        url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'} 
        attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      />

      {/* <Markers places={places}/> */}
      {
        places.map(place => (
          <Marker 
            key={place.name } 
            position={ place.geometry }
            icon={ icon }
            onClick={ () => {
              console.log(place.name)
            }}
            
          >
                        {
        state && (
          <Popup
            position={ state.currentLocation }
            onClose={ () => {
              setState({
                name: place.name
              })
            }}
          >
            <div>
              <h2>{ state.name }</h2>
            </div>

          </Popup>
        )
      }
          </Marker>
            

        ))
      }
      
    </MapContainer>
  )
}
