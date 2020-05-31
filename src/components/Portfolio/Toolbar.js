import React from "react";
import PropTypes from "prop-types";
function Toolbar(props) {
  const { filters, selected } = props;

  const onSelectFilter = (e) => {
    props.onSelectFilter(e.target.dataset.attr);
  };
  return (
    <>
      <div className="filter">
        <div className="list-filter">
          {filters.map((a) => (
            <button
              data-attr={a}
              onClick={onSelectFilter}
              key={a}
              className="item-filter-btn"
            >
              {a}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
Toolbar.propTypes = {
  filters: PropTypes.object.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};
export default Toolbar;
