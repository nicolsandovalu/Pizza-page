import { useContext } from "react";
import { PizzasDescription } from "../context/PizzasDescription";
import PizzaCard from "../components/PizzaCard";


const Home = () => {

    const {pizzas} = useContext (PizzasDescription);

    return (
        <div className="container m-4">
            {pizzas && (
                <div className="row gy-2">
                    {pizzas.map((pizza) => (
                        <div className="col-sm-4" key = {pizza.id}>
                            <PizzaCard pizza = {pizza}/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;