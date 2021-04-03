import React from "react";

export const AddressItem = ({ mapPoint, onClickItem }) => {
  return (
    <div
      className="item"
      onClick={() => onClickItem(mapPoint)}
      style={{ cursor: "default" }}
    >
      <i className="linkify icon"></i>
      <div className="content">{mapPoint.address}</div>
    </div>
  );
};
