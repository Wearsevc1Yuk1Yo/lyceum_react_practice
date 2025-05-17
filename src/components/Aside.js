import { Link } from "react-router-dom";

function Aside() {
    return(
      <aside>
        <div>
          <h2>Каталог</h2>
          <Link to="/category/materials"><p>материалы</p></Link>
          <Link to="/category/trinkets"><p>безделушки</p></Link>
          <Link to="/category/accessories"><p>accessories</p></Link>
        </div>
      </aside>
    );
}

export default Aside;