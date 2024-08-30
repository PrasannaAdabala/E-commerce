import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../component/ProductCard';
import { TextField, Container, Grid, Typography } from '@mui/material';

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '20px' }}>
        Products
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        label="Search Products"
        onChange={handleSearch}
        style={{ marginBottom: '20px' }}
      />
      <Grid container spacing={3}>
        {filteredProducts.map(product => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
