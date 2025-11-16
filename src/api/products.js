import client from './client';

// Fetch all products from backend and return the array in the shape expected by the frontend.
export async function fetchProducts() {
  const { data } = await client.get('/products'); // hits /api/products on backend
  return data?.data || [];
}

// Create a new product (for admin dashboard)
// payload: { Name, Description, Price, Img, category }
export async function createProduct(payload) {
  const { data } = await client.post('/products', payload);
  return data?.data;
}

// Delete a product by id (for admin dashboard)
export async function deleteProduct(id) {
  const { data } = await client.delete(`/products/${id}`);
  return data;
}
