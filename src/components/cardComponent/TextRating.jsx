import * as React from 'react';
import Rating from '@mui/material/Rating';


function TextRating(props) {
  return (

     <div className="Rating">
<Rating defaultValue={4} max={5} precision={0.1}/>
     </div>
  )
 

}

export default TextRating;