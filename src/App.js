import "./App.css";
import React from "react";
import CardComponent from "./components/cardComponent/CardComponent";
import { menu } from "./data";
import ImageSlider from "./components/SliderImages/ImageSlider";
import { SliderData } from "./components/SliderImages/SliderData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu,
    };
  }
  render() {
    
    return (
      <>
       <ImageSlider slides={SliderData} />
      <div className='header'>
        <h1>Fiesta</h1>
        <div className="navigation">
          <h3>About</h3>
          <h3>Location</h3>
          <h3>Fiesta Rooms</h3>
          <button className="reservation">Reservation</button>
        </div>
        </div>
        <div className='box'>
        <div className="background">
          <button className="order">Order Now</button>
        </div>
        {/* input for menu search has been created below */}
       <input type="text" className="search-bar" placeholder="Search"/>
        <div className="card">
          {this.state.menu.map((item) => (
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
        </div>
      </>
    );
  }
}

export default App;
