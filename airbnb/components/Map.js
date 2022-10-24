import { useState } from 'react'
import ReactMapGl from 'react-map-gl'
import {getCenter} from 'geolib'
import { Marker, Popup } from 'react-map-gl'
import Image from 'next/image'
const Map = ({searchResults}) => {
    const coordinates = searchResults.map((result)=>({
        longtitude: result.long,
        latitude: result.lat
    }))
    const center = getCenter(coordinates)
    console.log(center);
    const [viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
        longtitude:-100,
        latitude:40,
        zoom:8
    })
    return (
        <ReactMapGl
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onMove={evt =>setViewport(evt.viewport)}
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport)=>setViewport(nextViewport)}>
            {searchResults.map((result)=>(
                <div key={result.long}>
                    <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetRight={-10}
                    />
                    <p className='cursor-pointer text-2xl'>
                        <img src='image.png'/>
                    </p>
                </div>
            ))}
        </ReactMapGl>
)
}

export default Map

