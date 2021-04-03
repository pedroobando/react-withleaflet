import React from "react";

export const AddressItem = ({ mapPoint }) => {
  // console.log(mapPoint);

  return (
    <div
      className="item"
      onClick={() => console.log(mapPoint.latlng)}
      style={{ cursor: "default" }}
    >
      <i className="linkify icon"></i>
      <div className="content">{mapPoint.address}</div>
    </div>
  );
};
