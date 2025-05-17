import { Link } from "react-router-dom";
import { useContext } from "react";
import { useCart } from "../context/CartContext";

function Header() {

    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return(
      <nav>
        <div className="navbar">
            <Link to="/">˗ˏˋ ★ ˎˊ˗ Home ˗ˏˋ ★ ˎˊ˗</Link>
            <Link to="/cart">Cart ({totalItems}) </Link>
        </div>
      </nav>
    );
}

export default Header;