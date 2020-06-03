import React from "react";
import PropTypes from "prop-types";

import view_list from "../../img/view-list-button.png";
import view_module from "../../img/menu.png";
function IconSwitch(props) {
  // const [icon] = props;
  const onSwitch = (e) => {
    props.onSwitch(e.target.dataset.attr);
  };

  return (
    <img
      onClick={onSwitch}
      src={props.icon == "view_module" ? view_list : view_module}
      data-attr={props.icon}
      className="icons"
    />
  );
}
IconSwitch.propTypes = {
  // filters: PropTypes.object.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
export default IconSwitch;
