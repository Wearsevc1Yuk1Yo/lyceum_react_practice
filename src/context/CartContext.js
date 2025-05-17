
import { createContext, useState, useContext, useEffect  } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    // насерчила умных штук чтобы корзина в локалсторэдж 
    // сохранялась при перезагрузке стрницы и ваще любом изменении

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

    const decreaseQuantity = (productId) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productId);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                // 1 -> удалили
                return prevCart.filter(item => item.id !== productId);
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }; // удаляет товар с данным ID from Cart

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
    // value корзина и функ удал/добав итог суммы

};

export const useCart = () => useContext(CartContext);
// Позволяет использовать const { cart } = useCart();
//  вместо useContext(CartContext)