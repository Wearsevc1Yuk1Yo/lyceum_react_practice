import { useCart } from "../context/CartContext";

function ProductCard({ product}) {

    const { addToCart } = useCart();

    return(
        <div className="card">
            <div className="card-img">
                <img src={product.img} alt={product.name}></img>
            </div>
            <p className="card-name">{product.name}</p>
            <p className="card-desc">{product.description}</p>
            <p className="card-price">${product.price}</p>
            
            <button onClick={() => addToCart(product)}>Add to your cart</button>
        </div>
    );
}

export default ProductCard;