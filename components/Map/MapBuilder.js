import ReactMapGL, {Marker} from 'react-map-gl'
import {useState} from 'react'
import style from './Map.module.scss'
import CityPin from './CityPin'

const apiPublicToken = 'pk.eyJ1IjoibWFudWVscm9kZ3p6IiwiYSI6ImNraWhsYXQxOTA0ZHcyeG16cm5nYzg1OTkifQ.80CCl2mOytRN7ORSO9Ew9Q'

const MapBuilder = ({latitude, longitude}) => {

    const [viewport, setViewPort] = useState({
        latitude: latitude || 25.687071,
        longitude: longitude || -100.322584,
        zoom: 10,
        width: '100%',
        height: '100%'
    })

    return(
        <div className={style.mapContainer}>
            <ReactMapGL 
            {...viewport} 
            mapboxApiAccessToken={apiPublicToken} 
            onViewportChange={(viewport) => setViewPort(viewport)}
            >
                {(latitude && longitude) 
                ? <Marker latitude={latitude} longitude={longitude} ><CityPin/></Marker> 
                : ''}
            </ReactMapGL>
        </div>
    )
}

export default MapBuilder