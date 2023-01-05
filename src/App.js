import "./App.css";
import React from "react";
import CardComponent from "./components/cardComponent/CardComponent";
import { menu } from "./data";

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
      <h1>Comminity Restaurant</h1>  
      <div className="background">
      <img src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="background"></img>
      <button classNmae="order">Order Now</button>
      </div>
      
      
      <div className = "card">
        {this.state.menu.map((item) => (
          <div key={item.id}>
            <CardComponent className="card-item"
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
      </>
    );
  }
}

export default App;
