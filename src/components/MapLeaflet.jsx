import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

const initialMarkState = {
  fixed: false,
  latlng: { lat: 6, lng: 7 },
};

const MapLeaflet = ({ defaultProps, setLatLng }) => {
  const { address, latlng, zoom, scrollZoom } = defaultProps;

  // if (latlng.lat === -999 && latlng.lng === -999) return <div></div>;

  console.log(latlng);
  const LocationMarker = () => {
    const map = useMapEvents({
      click: (e) => {
        setLatLng((locMap) => ({ ...locMap, latLng: e.latlng }));
      },
    });

    useEffect(() => {
      map.flyTo(latlng, map.getZoom());
    }, [latlng]);

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
      <LocationMarker />
    </MapContainer>
  );
};

export default MapLeaflet;
