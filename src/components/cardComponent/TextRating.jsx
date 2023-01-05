import * as React from 'react';
import Rating from '@mui/material/Rating';


class TextRating extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="Rating">
        <Rating name="read-only" value={this.props.rate} readOnly />
      </div>
    );
  }
}
export default TextRating;