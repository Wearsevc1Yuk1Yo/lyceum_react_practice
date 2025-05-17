// // pages/Cart.js
// import { useCart } from '../context/CartContext';
// import { useState } from 'react';

// function Cart() {
//     const [count, setCount] = useState(0);

//     return (
//       <div className="App">
//         <h1>:/</h1>
//       </div>
//     );
// }

// export default Cart
// pages/Cart.js
import { useCart } from '../context/CartContext';

function Cart() {
    const { cart, removeFromCart, totalPrice } = useCart();

    return (
        <div className="cart-page">
            <h1>Корзина</h1>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <h3>{item.name}</h3>
                                <p>Цена: ${item.price}</p>
                                <p>Количество: {item.quantity}</p>
                                <p>Сумма: ${item.price * item.quantity}</p>
                                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>Общая сумма: ${totalPrice}</h3>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;