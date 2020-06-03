import React, { useState } from "react";
// import MaterialIcon from "material-icons-react";
import ListView from "./ListView";
import IconSwitch from "./IconSwitch";
import obj from "../../data/store.json";
function Store() {
  const [item, setItem] = useState({
    icon: "view_list",
    vue: "flex",
  });
  const toggleIcons = (attr) => {
    if (attr == "view_list") {
      setItem({
        icon: "view_module",
        vue: "column",
      });
    } else {
      setItem({
        icon: "view_list",
        vue: "flex",
      });
    }
  };
  return (
    <>
      <IconSwitch
        data-attr={item.icon}
        icon={item.icon}
        onSwitch={toggleIcons}
      />
      <ListView vue={item.vue} items={obj} />
    </>
  );
}
export default Store;
