// Corrected ProductDetailPage component
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`); // Fixed URL
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.title}
        height="200"
        width="200"
        image={product.image}
      />
      <CardContent>
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => addToCart(product)}
          style={{ marginTop: '20px' }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetailPage;
