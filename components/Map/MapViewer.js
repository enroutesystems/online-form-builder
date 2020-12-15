import ReactMapGL, {Marker} from 'react-map-gl'
import {useState} from 'react'
import style from './Map.module.scss'
import CityPin from './CityPin'

const apiPublicToken = 'pk.eyJ1IjoibWFudWVscm9kZ3p6IiwiYSI6ImNraWhsYXQxOTA0ZHcyeG16cm5nYzg1OTkifQ.80CCl2mOytRN7ORSO9Ew9Q'

/**onPointAdded event is dispatched when user adds a point in the map by clicking on it.
 *  This event returns a point object which contains latitude and longitude properties
 */
const MapViewer = ({onPointAdded}) => {

    const [pin, setPin] = useState()

    const [viewport, setViewPort] = useState({
        latitude:25.687071,
        longitude: -100.322584,
        zoom: 10,
        width: '100%',
        height: '100%'
    })

    const addPoint = ({lngLat: [longitude, latitude]}) => {
        setPin({longitude, latitude})
        onPointAdded({longitude, latitude})
    }
    
    const removeMarker = () => setPin(undefined)

    return(
        <div className={style.mapContainer}>
            <ReactMapGL 
            {...viewport} 
            onClick={addPoint}
            mapboxApiAccessToken={apiPublicToken} 
            onViewportChange={(viewport) => setViewPort(viewport)}
            >
                {pin ? <Marker {...pin} captureClick={true}><CityPin onClick={removeMarker}/></Marker> : ''}
            </ReactMapGL>
        </div>
    )
}

export default MapViewer