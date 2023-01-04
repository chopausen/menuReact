import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextRating from "./TextRating";
import { menu } from "./cardComponent/data"


class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu 
    }
  }
  addToCartHandler = () => {
    console.log("Add to cart clicked!");
  };

  render() {

    const { item } = this.props
    // const name = this.props.item.name;
    // const img = this.props.item.img;
    // const price = this.props.item.price;
    // const dsc = this.props.item.dsc;
    // const category = this.props.item.category;

    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={item.img} name={item.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.dsc}
            </Typography>
            <Typography>${item.price}</Typography>
            <Typography>Category: {item.category}</Typography>
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
