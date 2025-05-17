import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {

    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return(
      <nav>
        <div className="navbar">
            <Link to="/">Главная</Link>
            <Link to="/cart">Корзина ({totalItems}) </Link>
        </div>
      </nav>
    );
}

export default Header;