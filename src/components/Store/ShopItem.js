import React, { useState } from "react";

function ShopItem(props) {
  const { items } = props;
  return (
    <div className="card">
      <div className="img">
        <img src={items.img} alt="" />
      </div>
      <div className="title">{items.name}</div>
      <div className="color">{items.color}</div>
      <div className="price">{items.price}</div>
      <button type="button" className="btn">
        add to card
      </button>
    </div>
  );
}
export default ShopItem;
