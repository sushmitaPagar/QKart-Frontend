import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
       <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://crio-directus-assets.s3.ap-south-1.amazonaws.com/ff071a1c-1099-48f9-9b03-f858ccc53832.png"
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tan Leatherette Weekender Duffle
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $150
          </Typography>
          <Rating name="read-only" value={4} readOnly />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button fullWidth={true} color="primary" variant="contained">
          <AddShoppingCartOutlined />ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
