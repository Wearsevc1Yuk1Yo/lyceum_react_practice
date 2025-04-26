import { useState } from 'react';

function SecondPage() {
    const [count, setCount] = useState(0);

    return (
      <div className="App">
        <h1>Корзина({count})</h1>
      </div>
    );
}

export default SecondPage
