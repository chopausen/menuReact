import React from "react";
import "./Filter.css";


class FilterPrice extends React.Component {
    render() {

      return (
        <div className="mainFilter">
          <h4 id="sort">Price range:</h4>
          <select
            id="filter-price-select"
            onChange={(e) => this.props.handlePriceRange(e.target.value)}>
          <option value="all">all</option>
          <option value="$0-$50">$0-$50</option>
          <option value="$50-$100">$50-$100</option>
          <option value="$100-$150">$100-$150</option>
          <option value="$150-$200">$150-$200</option>
          <option value="$200-$250">$200-$250</option>
          </select>
        </div>
      );
    }
  }
  
  export default FilterPrice;
  