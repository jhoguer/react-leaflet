import React from 'react'
import { Marker } from 'react-leaflet'
import { IconLocation } from './IconLocation'




function Markers(props) {

  const { places } = props
  const markers = places.map(place => (
    <Marker key={place.name } position={ place.geometry } icon={ IconLocation } />
  ))
  return markers
}

export default Markers

