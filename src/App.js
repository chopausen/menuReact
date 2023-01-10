import "./App.css";
import React from "react";
import CardComponent from "./components/cardComponent/CardComponent";
import { menu } from "./data";
import ImageSlider from "./components/SliderImages/ImageSlider";
import { SliderData } from "./components/SliderImages/SliderData";
import Reservation from "./components/reservation/Reservation";
import Filter from "./components/filter/Filter";
import SortPrice from "./components/sort/SortPrice";
import Footer from "./components/footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToFilter: menu,
      value: "all",
      showComponent: false,
      handleOpen: false,
    };
  }

  //   orderHandler =(()=> {
  // this.setState({
  //   showComponent: true,
  // })
  //   })

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

  render() {
    return (
      <>
        <div className="header">
          <h1>Fiesta</h1>
          <div className="navigation">
            <h3>About</h3>
            <h3>Location</h3>
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
        <br />
        <h1 className="menu-h1">Menu</h1>
        {/* input for menu search has been created below */}
        <input type="text" className="search-bar" placeholder="Search" />

        {/* FILTER COMPONENT */}
        <div className="wrapper">
          <Filter handleFilter={this.handleFilter} value={this.state.value} />
          {/* Sort component to be added with functionality: */}
          <div className="sort-wrapper">
            <SortPrice />
          </div>
        </div>

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
