import "./App.css";
import React from "react";
import CardComponent from "./components/cardComponent/CardComponent";
// import { menu } from "./data"

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // menu
      id: "bbq-rib-tips-serves-10-15",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90450/bbq-rib-tips-serves-10-15.c3f35f44d3b1650273c3cdd42494fb66.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Bludso's BBQ",
      dsc: "BBQ Rib Tips - Serves 10-15",
      price: 109,
      rate: 5,
      country: "Los Angeles, CA",
      category: "barbeque"
      
      
    };
  }
  render() {
     
    return (
      <div>
      
        {/* {this.state.menu.map(item => 
        (
          <div key={item.id}>     */}
        <CardComponent
          name={this.state.name}
          category={this.state.category}
          price={this.state.price}
          img={this.state.img}
          dsc={this.state.dsc}
          rate={this.state.rate}
        />
        {/* </div>
  ))} */}
      </div>
    )
  }
}

export default App;
