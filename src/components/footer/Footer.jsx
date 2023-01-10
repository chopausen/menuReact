import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="our-schedule">
          <h3> Our schedule: </h3>
          <p>Mon: 9.00 am - 10.00pm </p>
          <p>Tue: 9.00 am - 10.00pm</p>
          <p>Wed: 9.00 am - 10.00pm</p>
          <p>Thur: 9.00 am - 10.00pm</p>
          <p>Fri: 11.00 am - 11.00pm</p>
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
