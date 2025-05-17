import logo from './kittenr.png';
import './App.css';
import MainPage from './pages/MainPage'
import SecondPage from './pages/Cart'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aside from './components/Aside';

function App() {
  return (
    <Router>      
      <nav class="Const_header">
        <Link to="/"> <div class="head_text">Главная  </div></Link>
        <Link to="/cart"><div class="head_text">Корзина  </div></Link>
      </nav>

      <div className='body'>
          <Aside/>
          <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>
            <Route path='/cart' element={<SecondPage></SecondPage>}></Route>
          </Routes> 
      </div>
    </Router>
  );
}

export default App;
