import logo from '../kittenr.png';
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";


function MainPage() {
  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MainPage