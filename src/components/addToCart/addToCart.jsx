import React from "react";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./addToCart.css";

class AddToCart extends React.Component {
  addToCartHandler = () => {
    console.log("Add to cart clicked!");
  };
  render() {
    return (
      <div>
        <IconButton
          color="success"
          aria-label="add to shopping cart"
          onClick={this.addToCartHandler}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </div>
    );
  }
}

export default AddToCart;
