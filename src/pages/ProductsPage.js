// pages/ProductsPage.js
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';

function ProductsPage() {
  const { category } = useParams();
  const filteredProducts = products.filter(product => 
    product.category.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div className="products-grid">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsPage;