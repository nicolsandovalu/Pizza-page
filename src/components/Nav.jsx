import {Link} from 'react-router-dom';
import { faShoppingCart, faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { PizzasDescription } from '../context/PizzasDescription';

const Nav = () => {

    const {total} = useContext (PizzasDescription);

    return (
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid ml-5">
    <a class="navbar-brand" href="/home">   <FontAwesomeIcon icon={faPizzaSlice} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Pizzas">Productos</Link>
        </li>
      </ul>
      <Link className='p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 mr-3' to= "/cart"><FontAwesomeIcon icon={faShoppingCart} /> Carrito ${total}</Link>
    </div>
  </div>
</nav>
    )
}

export default Nav