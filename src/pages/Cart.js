import { useCart } from '../context/CartContext';

function Cart() {
    const { cart, decreaseQuantity, removeFromCart, totalPrice } = useCart();

    return (
        <div className="cart-page">
            <h1>Корзина</h1>

            {cart.length === 0 ? (
                <p>...Cart is emptyyy...</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">

                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Product total: ${item.price * item.quantity}</p>

                                <div className="cart-item-actions">
                                    <button onClick={() => decreaseQuantity(item.id)} className="quantity-btn">-</button>
                                    <button onClick={() => removeFromCart(item.id)} className="delete-btn">Delete</button>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <h3>Total price: ${totalPrice}</h3>
                    </div>
                    
                </>
            )}
        </div>
    );
}

export default Cart;