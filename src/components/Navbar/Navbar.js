import React from "react";
import { Link } from "react-router-dom";
import Reservation from "../reservation/Reservation";
import styled from "styled-components";



const NavUnlisted = styled.ul`
  text-decoration: none; 
`;

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    fontFamily: "Josefin Sans, sans-serif",
    color: "beige",
    fontSize: "25px",
  };

const Navbar = (props) => {
 
  return (
    <div className="header">
      <h1>Fiesta</h1>

   <NavUnlisted className= "navigation">
        
          <a href="/" style={linkStyle}>Menu</a>
      
          <Link to="/about" style={linkStyle}>About</Link>
       
          <Link to="/contact" style={linkStyle}>Contact US</Link>
       
          <Link to="/rooms" style={linkStyle}>Fiesta Rooms</Link>
        
        <Reservation onClick={props.handleOpen} />
     </NavUnlisted>
    </div>
  );
};

export default Navbar;
