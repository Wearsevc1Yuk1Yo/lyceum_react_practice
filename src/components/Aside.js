import { Link } from "react-router-dom";

function Aside() {
    return(
      <aside>
        <div>
          <h2>Сatalog</h2>
          <Link to="/category/materials"><p>materials</p></Link>
          <Link to="/category/trinkets"><p>trinkets</p></Link>
          <Link to="/category/accessories"><p>accessories</p></Link>
        </div>
      </aside>
    );
}

export default Aside;