import React from "react";
// import { menu } from "../../data";
import "./SortPrice.css";

class SortPrice extends React.Component {
  render() {
    return (
      <div className="mainFilter">
        <h4>Sort by: </h4>
        <button>High to low: </button>
        <button>Low to high: </button>
      </div>
    );
  }
}

export default SortPrice;
