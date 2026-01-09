import { useEffect, useState } from "react"
import type { Product } from "./product";

function App() {
    const [products, setProducts] = useState<Product[]>([]);


useEffect(() => {    
  fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching products:', error));
}, []);

const addProduct = () => {
  setProducts(prevState => [...prevState, 
    { 
      id: prevState.length + 1,
      name: 'Product ' + (prevState.length + 1),
      description: 'Description for Product ' + (prevState.length + 1),
      price: (prevState.length + 1) * 10.0,
      pictureUrl: 'https://via.placeholder.com/150',
      type: 'Type ' + (prevState.length + 1),
      brand: 'Brand ' + (prevState.length + 1),
      quantityInStock: 100
    }]);
}

  return (
    <div>
      <h1>ReStore.Net</h1>
      <ul>
        {products.map(items => (
          <li key={items.id}>{items.name} - {items.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
