import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Pizzas from '../pages/Pizzas';
import Cart from '../pages/Cart';
import PizzasDetails from '../pages/PizzasDetails';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/Pizzas' element={<Pizzas/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path="/pizza/:id" element={<PizzasDetails />} />
        </Routes>
    )
}

export default AppRoutes