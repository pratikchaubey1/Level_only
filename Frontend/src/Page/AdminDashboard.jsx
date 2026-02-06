import React, { useEffect, useState } from 'react';
import { fetchProducts, createProduct, deleteProduct } from '../api/products';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newProduct, setNewProduct] = useState({
    Name: '',
    category: '',
    Price: '',
    Img: '',
    Description: '',
  });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products for admin', error);
        // Keep toast only for load error if needed
        toast.error('Failed to load products for admin');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newProduct.Name || !newProduct.category || !newProduct.Price || !newProduct.Img || !newProduct.Description) {
      setFormError('Please fill in all fields');
      return;
    }
    try {
      setCreating(true);
      const created = await createProduct(newProduct);
      if (created) {
        setProducts((prev) => [...prev, created]);
        setNewProduct({ Name: '', category: '', Price: '', Img: '', Description: '' });
        setFormError('');
      }
    } catch (err) {
      console.error('Failed to add product', err);
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Failed to delete product', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto flex gap-6">
        {/* Left sidebar sections */}
        <aside className="w-48 bg-white rounded-lg shadow p-4">
          <h2 className="text-sm font-semibold mb-3">Sections</h2>
          <button
            type="button"
            className="w-full text-left px-3 py-2 rounded bg-black text-white text-sm"
          >
            Products
          </button>
          {/* Future admin sections can be added here */}
        </aside>

        {/* Right side main content */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
          <p className="text-gray-600 mb-6">Manage products loaded from the backend database.</p>

          {/* Add new product form */}
          <form onSubmit={handleCreate} className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-3 items-end bg-white p-4 rounded-lg shadow">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border px-2 py-1 rounded text-sm"
              value={newProduct.Name}
              onChange={(e) => setNewProduct((p) => ({ ...p, Name: e.target.value }))}
              placeholder="Product name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
            <select
              className="w-full border px-2 py-1 rounded text-sm"
              value={newProduct.category}
              onChange={(e) => setNewProduct((p) => ({ ...p, category: e.target.value }))}
            >
              <option value="">Select category</option>
              <option value="Shoes">Shoes</option>
              <option value="Shirts">Shirts</option>
              <option value="Bags">Bags</option>
              <option value="Jeans">Jeans</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Price</label>
            <input
              type="number"
              className="w-full border px-2 py-1 rounded text-sm"
              value={newProduct.Price}
              onChange={(e) => setNewProduct((p) => ({ ...p, Price: e.target.value }))}
              placeholder="1999"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              className="w-full border px-2 py-1 rounded text-sm"
              value={newProduct.Img}
              onChange={(e) => setNewProduct((p) => ({ ...p, Img: e.target.value }))}
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
            <input
              type="text"
              className="w-full border px-2 py-1 rounded text-sm"
              value={newProduct.Description}
              onChange={(e) => setNewProduct((p) => ({ ...p, Description: e.target.value }))}
              placeholder="Short description"
            />
          </div>
          <div className="md:col-span-5 flex justify-between items-center mt-2">
            {formError && (
              <p className="text-xs text-red-600">{formError}</p>
            )}
            <button
              type="submit"
              disabled={creating}
              className={`ml-auto px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded hover:bg-teal-700 ${creating ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {creating ? 'Adding...' : 'Add Product'}
            </button>
          </div>
          </form>

          {loading ? (
            <p className="text-gray-500">Loading products...</p>
          ) : (
            <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-t">
                    <td className="px-4 py-2">{p.Name}</td>
                    <td className="px-4 py-2">{p.category}</td>
                    <td className="px-4 py-2">$ {p.Price}</td>
                    <td className="px-4 py-2 text-right">
                      <button
                        type="button"
                        onClick={() => handleDelete(p.id)}
                        className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && !loading && (
                  <tr>
                    <td colSpan={4} className="px-4 py-4 text-center text-gray-500">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
