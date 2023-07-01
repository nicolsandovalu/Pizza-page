import React, { useContext } from "react";
import { PizzasDescription } from "../context/PizzasDescription";
import { useNavigate } from "react-router-dom";
import { faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const PizzaCard = ({ pizza }) => {

    const { addToCart } = useContext (PizzasDescription);
    const navigate = useNavigate ();
    const handleNavigate = () => {
        navigate (`/pizza/${pizza.id}`);
    }
    
    const cardStyle = {
        width: '100%',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '5px',
    }

    const imgStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    }
    
    return (

        <div style={cardStyle} className="card">
            <img style={imgStyle} src={pizza.img} alt={pizza.name} />
            <div className="card-body">
                <h3 className="display-3">{pizza.name}</h3>
                <ul>
                <p>Ingredientes:</p>
                <FontAwesomeIcon icon={faPizzaSlice}/> {pizza.ingredients.join(',')}
              </ul>
                <p>Precio: ${pizza.price}</p>
                <div className="d-flex justify-content-between">
                    <button onClick={() => addToCart(pizza)} className="btn btn-primary">Agregar al carrito</button>
                    <button onClick={handleNavigate} className="btn btn-primary">Detalles</button>
                </div>
            </div>
        </div>
    )

}

export default PizzaCard;