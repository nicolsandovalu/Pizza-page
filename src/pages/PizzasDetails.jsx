import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PizzasDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch('/pizzas.json');
  const navigate = useNavigate();

  console.log('Data:', data);
  console.log('ID:', id);

  const pizza = data && data.find(pizza => pizza.id === id);

  console.log('Pizza:', pizza);

  const handleNavigate = () => {
    navigate('/');
  }

  if (loading) {
    return <div>Cargando pizzas...</div>;
  }

  if (error) {
    return <div>Error al cargar las pizzas: {error.message}</div>;
  }

  if (!pizza) {
    return <div>No se encontró la pizza</div>;
  }

  return (
    <div className="container mt-5 col-4">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h1>{pizza.name}</h1>
              <img className='col-12' src={pizza.img} alt={pizza.name} />
              <p className='m-2'>{pizza.desc}</p>
              <ul>
                <p>Ingredientes:</p>
                <FontAwesomeIcon icon={faPizzaSlice}/> {pizza.ingredients.join(',')}
              </ul>
              <p></p>
              <p>Precio: $ {pizza.price}</p>
              <button className="btn btn-primary" onClick={handleNavigate}>Regresar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzasDetails;
