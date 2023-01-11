import "./App.css";
import React from "react";
import CardComponent from "./components/cardComponent/CardComponent";
import { menu } from "./data";
import ImageSlider from "./components/SliderImages/ImageSlider";
import { SliderData } from "./components/SliderImages/SliderData";
import Reservation from "./components/reservation/Reservation";
import Filter from "./components/filter/Filter";
import FilterPrice from "./components/filter/FilterPrice";
import Footer from "./components/footer/Footer";
import Search from "./components/search/Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToFilter: menu,
      value: "all",
      showComponent: false,
      handleOpen: false,
      menu,
    };
  }

  handleFilter = (category) => {
    this.setState({ ...this.state, value: category });
    if (category === "all") {
      this.setState({ menuToFilter: menu });
    } else {
      const newMenu = menu.filter((meal) => {
        return meal.category.toLowerCase() === category.toLowerCase();
      });
      this.setState({ menuToFilter: newMenu });
    }
  };

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

  render() {
    return (
      <>
        <div className="header">
          <h1>Fiesta</h1>
          <div className="navigation">
            <h3>About</h3>
            <h3>Contact us</h3>
            <h3>Fiesta Rooms</h3>
            <Reservation onClick={this.handleOpen} />
          </div>
        </div>
        <div className="box">
          <ImageSlider slides={SliderData} />
          <div className="background">
            <button className="order">Order Now</button>
          </div>
        </div>
        {/* <h1 className="menu-h1">Menu</h1> */}
        {/* FILTER COMPONENT */}
        <div className="wrapper">
          <Filter handleFilter={this.handleFilter} value={this.state.value} />
          <FilterPrice
            handlePriceRange={this.handlePriceRange}
            value={this.state.value}
          />
          <Search />
        </div>
        {/* Card component: */}
        <div className="card">
          {this.state.menuToFilter.map((item) => (
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
        <Footer />
      </>
    );
  }
}

export default App;
