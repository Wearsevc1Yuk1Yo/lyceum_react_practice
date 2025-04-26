import logo from './kittenr.png';
import './App.css';
import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage'
import Products from './pages/Products'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aside from './components/Aside';

function App() {
  return (
    <Router>      
      <nav class="Const_header">
        <Link to="/"> <div class="head_text">Главная  </div></Link>
        <Link to="/cart"><div class="head_text">Корзина  </div></Link>
        <Link to="/products"><div class="head_text">Товары</div></Link>
      </nav>

      {/* <header>
        <title>мяу мяу мяу мяу</title>
        <h1>мяяяяяяяяяяяяяяу</h1>
      </header> */}

      <div className='body'>
          <Aside/>
          <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>
            <Route path='/cart' element={<SecondPage></SecondPage>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
          </Routes> 
      </div>
    </Router>
  );
}

export default App;
