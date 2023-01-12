import React from "react";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./addToCart.css";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total:0
    };
  }

  addToCartHandler = () => {
    let count = this.state.total;
    count = (count + this.props.price);
    this.setState({total:count})
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
        <p>Total:{(this.state.total).toFixed(0)}</p>
      </div>
    );
  }
}

export default AddToCart;
