import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="200"
        image={product.image}
        style={{ objectFit: 'cover' }}
      />
      <CardContent style={{ flex: '1 0 auto', textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/product/${product.id}`}
          style={{ padding: '6px 12px', fontSize: '0.875rem' }}
        >
          View Details
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => addToCart(product)}
          style={{ padding: '6px 12px', fontSize: '0.875rem' }}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
