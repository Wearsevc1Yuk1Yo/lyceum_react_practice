import logo from './kittenr.png';
import './App.css';
import MainPage from './pages/MainPage'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aside from './components/Aside';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
          {/* <nav class="Const_header">
            <Link to="/"> <div class="head_text">Главная  </div></Link>
            <Link to="/cart"><div class="head_text">Корзина  </div></Link>
          </nav> */}

          <div className='body'>
              <Aside/>
              <main>
                <Routes>
                  <Route path='/' element={<MainPage></MainPage>}></Route>
                  <Route path='/cart' element={<Cart />}></Route>
                  <Route path='/category/:category' element={<ProductsPage />} />
                </Routes> 
              </main>
          </div>
      </Router> 
    </CartProvider>
  );
}

export default App;
