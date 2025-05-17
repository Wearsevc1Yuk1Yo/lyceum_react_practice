import logo from '../kittenr.png';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function MainPage() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default MainPage