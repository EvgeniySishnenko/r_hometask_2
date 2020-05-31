import React from "react";

function ProjectList(props) {
  const { img, category } = props.projects;

  return (
    <div key={img} className="cnt-item">
      <img src={img} alt={category} className="cnt-img" />
    </div>
  );
}
export default ProjectList;
