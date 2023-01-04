import "./App.css";
import React from "react";
import CardComponent from "./components/cardComponent/CardComponent";
import { menu } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu,
      // id: "bbq-rib-tips-serves-10-15",
      // img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90450/bbq-rib-tips-serves-10-15.c3f35f44d3b1650273c3cdd42494fb66.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      // name: "Bludso's BBQ",
      // dsc: "BBQ Rib Tips - Serves 10-15",
      // price: 109,
      // rate: 5,
      // country: "Los Angeles, CA",
      // category: "barbeque",
    };
  }
  render() {
    const menu = this.state.menu;
    return (
      <div>
        {this.state.menu.map((item) => (
          <div key={item.id}>
            <CardComponent
              name={item.name}
              category={item.category}
              price={item.price}
              img={item.img}
              dsc={item.dsc}
              rate={item.rate}
              country={item.country}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
