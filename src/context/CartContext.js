
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
        
    // children все дочерние элементы,
    // которые будут обёрнуты в компонент CartProvider

    // empty массив - сост корзины

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            // индекс айтема если сущ-т
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                        // если объект уже сущ-т, то + 1 колво
                        // иначе добвляет товар колвоm 1
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }; // удаляет товар с данным ID from Cart

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
    // value корзина и функ удал/добав итог суммы

};

export const useCart = () => useContext(CartContext);
// Позволяет использовать const { cart } = useCart();
//  вместо useContext(CartContext)