import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../features/catalog/Catalog";
import { Container } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 14 }}>
        <Catalog products={products} />
      </Container>
    </>
  );
}

export default App;
