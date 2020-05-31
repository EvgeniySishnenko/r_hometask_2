import React, { useState } from "react";
import ProjectList from "./ProjectList";
import arr from "../../data/data";
import Toolbar from "./Toolbar";

function Portfolio() {
  const initial = {
    arr,
    selected: "All",
  };
  const [items, setItems] = useState(initial);
  const selectFilter = (item) => {
    setItems((prevItems) =>
      prevItems.arr.filter((a) => {
        if (a.category === item) {
          return a;
        }
      })
    );
  };
  return (
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={items.selected}
        onSelectFilter={selectFilter}
      />
      <div className="content">
        <div className="cnt-list">
          {items.arr.map((a) => (
            <ProjectList key={a} projects={a} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Portfolio;
