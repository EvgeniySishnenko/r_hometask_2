import React, { useState } from "react";
import ShopItem from "./ShopItem";
import PropTypes from "prop-types";

function ListView(props) {
  const { items, vue } = props;
  return (
    <div className={`list ${vue}`}>
      {Object.values(items).map((a) => (
        <ShopItem items={a} />
      ))}
    </div>
  );
}
ListView.propTypes = {
  items: PropTypes.object.isRequired,
  vue: PropTypes.string.isRequired,
};
export default ListView;
