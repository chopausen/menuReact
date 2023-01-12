import React from "react";
// import { useState } from "react";
import CardComponent from "../cardComponent/CardComponent";

const SearchBar = (props) => {
//   const [searchInput, setSearchInput] = useState("");

//   let handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//   };

//   if (searchInput.length > 0) {
//     props.menu.filter((item) => {
//       return item.name.match(searchInput);
//     });
//   }
const filteredData = props.menu.filter((el) => {
    if (props.input === '') {
        return el;
    } else {
        return el.text.toLowerCase().includes(props.input)
    }
})
  return (
    <div>
      {/* <input
        type="text"
        className="search-bar"
        placeholder="Search here"
        onChange={handleChange}
      /> */}


      {filteredData.map((item, index) => {
        return (
          <div key={item.index}>
            <CardComponent
              name={item.name}
              price={item.price}
              img={item.img}
              dsc={item.dsc}
              rate={item.rate}
              country={item.country}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchBar;
