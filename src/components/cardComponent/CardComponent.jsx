import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextRating from "./TextRating";



class CardComponent extends React.Component {
  constructor(props) {
    super();
   
  }
  addToCartHandler = () => {
    console.log("Add to cart clicked!");
  };

  render() {
 
    const name = this.props.name;
    const img = this.props.img;
    const price = this.props.price;
    const dsc = this.props.dsc;
    const category = this.props.category;
    const country = this.props.country;
    const rate = this.props.rate;

    return (
      <div>
        <Card sx={{ maxWidth: 300, margin: 2, maxHeight:430 }}>
          <CardMedia sx={{ height: 200, width: 300 }} image={img} name={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dsc}
            </Typography>
            <Typography>${price}</Typography>
            <Typography>Category: {category}</Typography>
            <Typography>Origin: {country}</Typography>
            <TextRating rate={rate} />
          </CardContent>
          <CardActions>
            <Button size="small" sx={{zIndex: 3}} onClick={this.addToCartHandler}>
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardComponent;
