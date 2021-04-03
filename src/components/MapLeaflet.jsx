import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

import "./MapLeaflet.css";

const MapLeaflet = ({ defaultProps, setLatLng, markPoints }) => {
  const { address, latlng } = defaultProps;

  const MarkerList = ({ markPoints }) => {
    return markPoints === []
      ? null
      : markPoints.map((mrk) => (
          <Marker position={mrk.latlng} key={mrk.key}>
            <Popup>{mrk.address}</Popup>
          </Marker>
        ));
  };

  const LocationMarker = () => {
    const map = useMapEvents({
      click: (e) => {
        setLatLng((locMap) => ({ ...locMap, latLng: e.latlng }));
      },
    });

    useEffect(() => {
      // console.log(latlng);
      map.flyTo(latlng, map.getZoom());
    }, [map]);

    return latlng === null ? null : (
      <Marker position={latlng}>
        <Popup>{address}</Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      center={latlng}
      zoom={5}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%", zIndex: 2 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerList markPoints={markPoints} />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapLeaflet;
