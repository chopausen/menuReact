import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="our-schedule">
          <h3> Our schedule: </h3>
          <br />
          <p>Tue - Thurs: 9.00 am - 10.00 pm</p>
          <p>Fri - Sun : 11.00 am - 11.00 pm</p>
          <p>Mon: We are closed! </p>
        </div>
        <div className="location-map">
          <img
            src="https://capturetheatlas.com/wp-content/uploads/2020/03/new-york-high-resolution-map-1415x540.jpg"
            width="400px"
            alt="address-map"
          ></img>
        </div>

        <div className="contacts">
          <h3>Contact us:</h3>
          <p>Phone: +1 402 498 2842 </p>
          <p>Email: fiesta@gmail.dummy.com</p>
          <p>Address: 72 North Sweet Ave, New York</p>
        </div>
      </footer>
    );
  }
}
