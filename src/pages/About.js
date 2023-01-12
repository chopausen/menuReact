import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const background = {
    backgroundColor: "peachpuff",
    display: "flex"
    

}

const about = {
marginTop: "300px",
marginLeft: "200px",
width: "40vw",
height: "50vh",

}

const content ={
    marginTop: "300px",
    marginLeft: "50px",
    width: "40%",
    height:"40%",
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "30px",
    fontWeight: "bold"


}

const About = () => {
  return (
    <div >
        <Navbar></Navbar>
        <div style={background}>
      <img src="https://images.pexels.com/photos/5638751/pexels-photo-5638751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="people" style={about}/>
      <p style= {content}> One of the best restaurants in Seytech 22-9 Cohort has established in January 2023 with a goal of serving bold, global flavors to our local community (and students:)). We provide free Fiesta Rooms to students, who gets a job. </p>
    </div> 
    </div>
   
  )
}

export default About
