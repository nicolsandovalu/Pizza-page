import React, { useContext } from "react";
import { PizzasDescription } from "../context/PizzasDescription";


const Cart = () => {

    const {cart, increment, decrement, total} = useContext (PizzasDescription)

    return (
        <div className="container">
            <h1 className="carro">Carrito de compras</h1>
            <div className="total border">
            <p>Total: ${total}</p>
            </div>

            {cart.map ( (item,index) => (

                <div className="">
                <div key = {index}>
                    <div className="card">
                <div className="col-sm-4">
                    <img src={item.img} className="img-fluid"/>
                    </div>
                    <h3 className="display-6">{item.name}</h3>
                    <p>${item.price}</p>
                    <p>{item.count}</p>
                    </div>
                    <button className="p-3 m-1 text-danger-emphasis bg-danger border danger-border-subtle rounded-3" onClick={() => decrement (index)}>-</button>
                    <button className="p-3 m-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" onClick={() => increment (index)}>+</button>
                </div>
                </div>
            ))}

        </div>
    )
}

export default Cart;