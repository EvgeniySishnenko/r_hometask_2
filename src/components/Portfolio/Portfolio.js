import React, { useState } from "react";
import ProjectList from "./ProjectList";
import arr from "../../data/data";
import Toolbar from "./Toolbar";

function Portfolio() {
  const [items, setItems] = useState(arr);
  const [selected, setSelected] = useState("All");
  const selectFilter = (item) => {
    if (item != "All") {
      setItems(() =>
        arr.filter((a) => {
          if (a.category === item) {
            return { ...arr, arr: a };
          }
        })
      );
      setSelected(item);
    } else {
      setItems(() =>
        arr.filter((a) => {
          return { ...arr };
        })
      );
    }
    setSelected(item);
  };

  return (
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected || "All"}
        onSelectFilter={selectFilter}
      />
      <div className="content">
        <div className="cnt-list">
          {items.map((a) => (
            <ProjectList key={a} projects={a} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Portfolio;
