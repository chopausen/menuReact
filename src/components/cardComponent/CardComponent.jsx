import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class CardComponent extends React.Component {
  constructor(props) {
    super();
  }
  addToCartHandler = () => {
    console.log("Add to cart clicked!");
  };

  render() {
    const title = this.props.title;
    const img = this.props.img;
    const price = this.props.price;
    const desc = this.props.desc;
    const category = this.props.category;
    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={img} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
            <Typography>${price}</Typography>
            <Typography>Category: {category}</Typography>
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
