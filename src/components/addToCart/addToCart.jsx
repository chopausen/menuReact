import React from "react";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./addToCart.css";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addToCartHandler = () => {
    let count = 0;
    count = count + this.props.price;
    console.log(count);
  };

  render() {
    return (
      <div>
        <IconButton
          color="success"
          aria-label="add to shopping cart"
          onClick={this.addToCartHandler}
        >
          <AddShoppingCartIcon /> Add
        </IconButton>
      </div>
    );
  }
}

export default AddToCart;
