import "./App.css";
import React from "react";
import CardComponent from "./components/cardComponent/CardComponent";
import { menu } from "./data";
import ImageSlider from "./components/SliderImages/ImageSlider";
import { SliderData } from "./components/SliderImages/SliderData";
import Filter from "./components/filter/Filter";
import FilterPrice from "./components/filter/FilterPrice";
import Footer from "./components/footer/Footer";
import Cart from "./components/addToCart/Cart";
import Search from "./components/search/Search";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToFilter: menu,
      valueMain: "all",
      showComponent: false,
      handleOpen: false,
      menu,
      query: "",
    };
  }

  // ↓↓↓ Sorting by Category ↓↓↓ //

  handleFilter = (category) => {
    this.setState({ ...this.state, valueMain: category });
    if (category === "all") {
      this.setState({ menuToFilter: menu });
    } else {
      const newMenu = menu.filter((meal) => {
        return meal.category.toLowerCase() === category.toLowerCase();
      });
      this.setState({ menuToFilter: newMenu });
    }
  };

  // ↓↓↓ Sorting by Price ↓↓↓ //
  handlePriceRange = (range) => {
    let filteredMenu = menu;
    if (range === "all") {
      this.setState({ menuToFilter: menu });
    } else if (range === "$0-$50") {
      filteredMenu = menu.filter((dish) => dish.price <= 50);
      this.setState({ menuToFilter: filteredMenu });
    } else if (range === "$50-$100") {
      filteredMenu = menu.filter(
        (dish) => dish.price > 50 && dish.price <= 100
      );
      this.setState({ menuToFilter: filteredMenu });
    } else if (range === "$100-$150") {
      filteredMenu = menu.filter(
        (dish) => dish.price > 100 && dish.price <= 150
      );
      this.setState({ menuToFilter: filteredMenu });
    } else if (range === "$150-$200") {
      filteredMenu = menu.filter(
        (dish) => dish.price > 150 && dish.price <= 200
      );
      this.setState({ menuToFilter: filteredMenu });
    } else if (range === "$200-$250") {
      filteredMenu = menu.filter(
        (dish) => dish.price > 200 && dish.price <= 250
      );
      this.setState({ menuToFilter: filteredMenu });
    }
  };

  // ↓↓↓ Search Functionality ↓↓↓ //
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  onKeyUp = (e) => {
    e.preventDefault();
    let results = menu.filter(
      (item) =>
        item.name.toLowerCase().includes(this.state.query.toLowerCase()) ||
        item.dsc.toLowerCase().includes(this.state.query.toLowerCase())
    );
    if(results.length === 0){
      this.setState({error: "NO matching food found."});
    } else{
    this.setState({ menuToFilter: results, error: ''});
  }
  };

  // ↓↓↓ Rendering Part ↓↓↓ //
  render() {
    let menuItems = this.state.menuToFilter;
    return (
      <>
        <Navbar />

        <div className="box">
          <ImageSlider slides={SliderData} />
          <div className="background">
            <button className="order">Order Now</button>
          </div>
        </div>
        
        
        {/* FILTER COMPONENT */}
        <div className="wrapper">
          <Filter handleFilter={this.handleFilter} value={this.state.value} />
          <FilterPrice
            handlePriceRange={this.handlePriceRange}
            value={this.state.value}
          />


          {/* SEARCH COMPONENT */}
          <Search
            handleChange={this.handleChange}
            onKeyUp={this.onKeyUp}
          />

          {/* Cart component which is calculate total sum */}
          <Cart />
        </div>

        {/* Error message if food not found */}
        <div className="noMatchesInSearch">{this.state.error&& <p>{this.state.error}</p>}

        {/* Card component: */}
        <div className="card">
          {menuItems.map((item) => (
            <div key={item.id}>
              <CardComponent
                name={item.name}
                price={item.price}
                img={item.img}
                dsc={item.dsc}
                rate={item.rate}
                country={item.country}
              />
            </div>
          ))}
        </div>

        {/* Footer part */}
        <Footer />
        </div>
      </>
    );
  }
}

export default App;
