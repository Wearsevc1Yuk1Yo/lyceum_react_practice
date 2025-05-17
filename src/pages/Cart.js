import { useState } from 'react';

function Cart() {
    const [count, setCount] = useState(0);

    return (
      <div className="App">
        <h1>Корзина</h1>
      </div>
    );
}

export default Cart
