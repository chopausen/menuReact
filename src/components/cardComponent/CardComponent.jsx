import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextRating from "./TextRating";
// import { menu } from "./cardComponent/components/data"


class CardComponent extends React.Component {
  constructor(props) {
    super();
    // this.state = {
    //   menu 
    // }
  }
  addToCartHandler = () => {
    console.log("Add to cart clicked!");
  };

  render() {

    // const { item } = this.props
    const name = this.props.name;
    const img = this.props.img;
    const price = this.props.price;
    const dsc = this.props.dsc;
    const category = this.props.category;

    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={img} name={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dsc}
            </Typography>
            <Typography>${price}</Typography>
            <Typography>Category: {category}</Typography>
           <TextRating />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={this.addToCartHandler}>
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardComponent;
