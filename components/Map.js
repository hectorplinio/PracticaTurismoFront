import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
export default function Map({ locations }) {
  // UseState hook
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // The latitude and longitude of the center of London
    latitude: 40.0718,
    longitude: -2.13401,
    zoom: 12.5,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1IjoiaGVjdG9ycGxpbmlvIiwiYSI6ImNrejQ3cDc2ZTBjbHEyb3J4MzMzZHpmMWMifQ.XT3g3xJFTaNGxYeMBtBoaQ"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {locations.map((location) => (
        <div key={location.id}>
          {console.log(location)}
          <Marker

            latitude={location.center[1]}
            longitude={location.center[0]}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <a
              onClick={() => {
                setSelectedLocation(location);
              }}
            >
              <span role="img" aria-label="push-pin">
                📍
              </span>
            </a>
          </Marker>
          {/* {selectLocation.id === location.id ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={location.center[1]}
              longitude={location.center[0]}
            >
              {location.place_name}
            </Popup>
          ) : (
            false
          )} */}
        </div>
      ))}
    </ReactMapGL>
  );
}
