import React, { useState } from "react";
import MaterialIcon from "material-icons-react";
import ListView from "./ListView";
import obj from "../../data/store.json";
function Store() {
  const [item, setItem] = useState({
    icon: "view_list",
    vue: "flex",
  });
  const toggleClass = (e, setItem) => {
    console.log(e.target.dataset.attr);

    if (e.target.dataset.attr === "view_list") {
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
      <MaterialIcon
        data-attr={item.icon}
        classes={item.icon}
        onClick={(e) => toggleClass(e, setItem)}
        icon={item.icon}
      />
      <ListView vue={item.vue} items={obj} />
    </>
  );
}
export default Store;
