import { useState } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

import AddressList from "./components/AddressList";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import MapLeaflet from "./components/MapLeaflet";

const initialState = {
  address: "",
  latlng: {
    lat: 0,
    lng: 0,
  },
};

const initialStateList = [];
const provider = new OpenStreetMapProvider();

export const Map1 = () => {
  const [mapLocation, setMapLocation] = useState(initialState);
  const [addressList, setAddressList] = useState(initialStateList);
  const [locationList, setLocationList] = useState([]);

  const handleChangeAddress = ({ target }) => {
    setMapLocation((valueMap) => ({ ...valueMap, [target.name]: target.value }));
  };

  const handleMapLocation = ({ address, latlng }) => {
    setMapLocation({ address, latlng });
  };

  const handleSelectPoint = () => {
    setLocationList((lst) => [
      ...lst,
      {
        key: locationList.length + 1,
        address: mapLocation.address,
        latlng: mapLocation.latlng,
      },
    ]);
  };

  const handleClearPoint = () => {
    setLocationList([]);
    setMapLocation(initialState);
    setAddressList(initialStateList);
  };

  const handleSearchAddress = async () => {
    const streeSearch = mapLocation.address.trim();
    if (streeSearch.length >= 3) {
      const srcLocation = await provider.search({ query: mapLocation.address.trim() });
      if (srcLocation.length >= 1) {
        setAddressList(
          srcLocation.map((point, ind) => ({
            key: ind,
            address: point.label,
            latlng: { lat: point.y, lng: point.x },
          }))
        );
      }
    }
  };

  return (
    <div className="ui container">
      <h2 className="ui header  center aligned icon">
        <i className="circular icon map"></i>
        Leaflet
      </h2>
      <div>
        <div className="ui icon input" style={{ width: "60%" }}>
          <input
            name="address"
            value={mapLocation.address}
            type="text"
            placeholder="Buscar direccion"
            onChange={handleChangeAddress}
          />
          <i className="circular search link icon" onClick={handleSearchAddress}></i>
        </div>
        <button
          className="ui basic green button"
          style={{ marginLeft: "5px" }}
          onClick={handleSelectPoint}
        >
          <i className="map marker alternate icon"></i>
          Marcar
        </button>
        <button className="ui red button" onClick={handleClearPoint}>
          <i className="trash icon"></i>
          Borrar
        </button>
      </div>
      <AddressList locationList={addressList} onClickItem={handleMapLocation} />

      <div className="ui segment">
        <MapLeaflet
          defaultProps={mapLocation}
          setLatLng={setMapLocation}
          markPoints={locationList}
        />
      </div>
    </div>
  );
};
