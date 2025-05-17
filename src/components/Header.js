import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {

    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return(
      <nav className="navbar">
            <Link to="/">˗ˏˋ ★ ˎˊ˗ Home ˗ˏˋ ★ ˎˊ˗</Link>
            <Link to="/cart">Cart ({totalItems}) </Link>
      </nav>
    );
}

export default Header;