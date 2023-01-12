import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const images ={
    display: "flex",

}
const FiestaRooms = () => {
  return (
    <div>
        <div>
        <Navbar></Navbar>
        </div>
        <div style={images}>
            <img src="https://images.pexels.com/photos/2313037/pexels-photo-2313037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room1" />
            <img src="https://images.pexels.com/photos/323910/pexels-photo-323910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room2" />
            <img src="https://images.pexels.com/photos/2290740/pexels-photo-2290740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room3" />

        </div>
      
    </div>
  )
}

export default FiestaRooms
