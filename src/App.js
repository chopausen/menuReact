import "./App.css";
import React from "react";
import CardComponent from "./components/cardComponent/CardComponent";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: 1,
      title: " milkshake",
      category: "breakfast",
      price: 15.99,
      img: "https://media.istockphoto.com/id/1323536801/photo/italian-frappe-isolated-on-white-background-gianduia-gelato-with-chocolate-topping-and-red.jpg?b=1&s=170667a&w=0&k=20&c=Fnw8T22h-gGE89mTvqygvCTs3NRJ6Nro5u2wgbMjxjk=",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    };
  }
  render() {
    return (
      <div>
        <CardComponent
          title={this.state.title}
          category={this.state.category}
          price={this.state.price}
          img={this.state.img}
          desc={this.state.desc}
        />
      </div>
    );
  }
}

export default App;
