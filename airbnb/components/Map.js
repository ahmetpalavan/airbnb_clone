import { useState } from 'react'
import ReactMapGl from 'react-map-gl'


const Map = () => {
    const [viewport, setViewport] = useState({
        // width:600,
        // height:600,
        latitude:37.7577,
        longtitude:-122.4376,
        zoom:8
    })
    return (
        <ReactMapGl
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport)=>setViewport(nextViewport)}
>

        </ReactMapGl>
)
}

export default Map

