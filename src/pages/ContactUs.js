import React from "react";
import Navbar from "../components/Navbar/Navbar";

const wholePage = {
    backgroundColor: "peachpuff",
}

const contactUs = {
    marginTop: "300px",
    marginLeft:"200Px",
    fontSize: "40px",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: "bold",
    lineHeight: "60px"

}
const ContactUs = () => {
  return (
    <div style={wholePage}>
      <div>
        <Navbar></Navbar>
      </div>
      <div style={contactUs}>
       
        Contact us: Phone: +1 402 498 2842 
        <br/>
        Email: fiesta@gmail.dummy.com
        <br/>
        Address: 72 North Sweet Ave, New York
      </div>
    </div>
  );
};

export default ContactUs;
