import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../features/catalog/Catalog";
import { Box, Button, Container, Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: "Product " + (prevState.length + 1),
        description: "Description for Product " + (prevState.length + 1),
        price: (prevState.length + 1) * 10.0,
        pictureUrl: "https://via.placeholder.com/150",
        type: "Type " + (prevState.length + 1),
        brand: "Brand " + (prevState.length + 1),
        quantityInStock: 100,
      },
    ]);
  };

  return (
    <Container maxWidth="xl">
      <Box display='flex' justifyContent='center' gap={3} marginY={3}>
        <Typography variant="h4">ReStore.Net</Typography>
        <Button variant="contained" color="primary" onClick={addProduct}>
          Add Product
        </Button>
      </Box>
      <Catalog products={products} />
    </Container>
  );
}

export default App;
