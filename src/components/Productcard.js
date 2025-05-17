import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({name, desc, price, img}) {

    const { addToCart } = useContext(CartContext);

    return(
        <div className="card">
            <div className="card-img">
                <img src={product.img} alt={product.name}></img>
            </div>
            <p className="card-name">${product.name}</p>
            <p className="card-desc">${product.desc}</p>
            <p className="card-price">${product.price}</p>
            
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
        </div>
    );
}

export default ProductCard;