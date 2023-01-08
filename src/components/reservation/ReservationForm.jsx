import React from "react";

function ReservationForm() {
  return (
    <div>
      <h2 className="make-reservation">Make a Reservation</h2>
      <form className="reservation-form">
        <div className='reserved'>
          <select className="quantity">
            <option>4 people</option>
            <option>6 person</option>
            <option>8 person</option>
            <option>10 person</option>
            <option>12 person</option>
            <option>Larger Party</option>
          </select>
          <input type="date" id="reservation" name="reservation"></input>
          <select className="time">
            <option>6:00 pm</option>
            <option>6:30 pm</option>
            <option>7:00 pm</option>
            <option>7:30 pm</option>
            <option>8:00 pm</option>
            <option>9:00 pm</option>
          </select>
        </div>
        <div className="submit-form">
          <input type="submit" value=" Find a Table" />
        </div>
      </form>
    </div>
  );
}
export default ReservationForm;
