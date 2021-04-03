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

const App = () => {
  const [mapLocation, setMapLocation] = useState(initialState);
  const [locationList, setLocationList] = useState(initialStateList);

  const handleChangeAddress = ({ target }) => {
    setMapLocation((valueMap) => ({ ...valueMap, [target.name]: target.value }));
  };

  const handleSearchAddress = async () => {
    const streeSearch = mapLocation.address.trim();
    if (streeSearch.length >= 3) {
      const srcLocation = await provider.search({ query: mapLocation.address.trim() });
      if (srcLocation.length >= 1) {
        setLocationList(
          srcLocation.map((point, ind) => ({
            key: ind,
            address: point.label,
            latlng: { lat: point.y, lng: point.x },
          }))
        );
        setMapLocation((valueMap) => ({
          ...valueMap,
          latlng: { lat: srcLocation[0].y, lng: srcLocation[0].x },
        }));
      }
    }
  };
  return (
    <div className="ui container">
      <h1>Leaflet</h1>
      <div>
        <div className="ui icon input" style={{ width: "75%" }}>
          <input
            name="address"
            value={setMapLocation.address}
            type="text"
            placeholder="Buscar direccion"
            onChange={handleChangeAddress}
          />
          <i className="circular search link icon" onClick={handleSearchAddress}></i>
        </div>
        <button className="ui basic button" style={{ marginLeft: "5px" }}>
          <i className="map outline icon"></i>
          Agregar
        </button>
      </div>
      <AddressList locationList={locationList} />

      <div className="ui segment">
        <MapLeaflet defaultProps={mapLocation} setLatLng={setMapLocation} />
      </div>
    </div>
  );
};

export default App;
