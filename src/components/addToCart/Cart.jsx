import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./addToCart.css";

class Cart extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <nav>
        <div className="nax-box">
          <span className="my-shop">My Cart</span>
          <div className="cart">
            <span>
              <ShoppingCartIcon size="large" />
            </span>
            <span>0</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Cart;
