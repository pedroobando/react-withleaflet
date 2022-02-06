import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const MapServidentJm = () => {
  const position = [10.13929, -64.68156];

  return (
    <div className="ui container">
      <h1 style={{ margin: "2rem 0" }}>Mapa de servident JM</h1>
      <div className="ui segment">
        <MapContainer
          center={position}
          zoom={15}
          style={{ width: "100%", height: "100%", zIndex: 2 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <img src="./assert/servidentmj.svg" width={"25px"} alt="servident mj" />
              <span className="orange" style={{ marginLeft: "1rem" }}>
                ServiDent MJ
              </span>
              <br />
              Av. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
