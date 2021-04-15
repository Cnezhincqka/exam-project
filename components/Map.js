import {compose, withHandlers, withProps, withState} from "recompose";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAZS4j6DyIuM2F-6xLIHStnxtVP5IYYB_M&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{width: "100vw", height: `90vh`}}/>,
        mapElement: <div style={{height: `100%`, marginLeft: "4rem", marginRight: "4rem"}}/>,
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', []),
    withState('refs', 'setRefs', {map: undefined}),
    withHandlers({
        onMapMounted: ({setRefs}) => ref => {
            setRefs({map: ref})
        },
        fetchPlaces: ({updatePlaces, type, region, coords, refs}) => () => {
            const town = new google.maps.LatLng(coords[0], coords[1])
            const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
            const request = {
                location: town,
                radius: "50000",
                query: `${region} ${type}`,
            };

            service.textSearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    updatePlaces(results);
                }
            })
        }
    }),
)((props) => {
    return (
        <>
            <GoogleMap
                onTilesLoaded={props.fetchPlaces}
                ref={props.onMapMounted}
                onBoundsChanged={props.fetchPlaces}
                defaultZoom={10}
                defaultCenter={{lat: 52.094246, lng: 23.684559}}
            >
                {props.places && props.places.map((place, i) =>
                    <Marker key={i}
                            position={{lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}}
                            title={place.name}/>
                )}
            </GoogleMap>
        </>
    )
})

export default MyMapComponent