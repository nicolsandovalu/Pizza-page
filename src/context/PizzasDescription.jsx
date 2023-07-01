import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const PizzasDescription = createContext () ;

export const PizzasProvider = ({children}) => {
        
        const [pizzas, setPizzas] = useState ([]);
        const [cart, setCart] = useState ([]);

        const {data, loading, error} = useFetch ('/pizzas.json')
        console.log (data);

        useEffect (() => {
            if (data) {
                setPizzas (data);
            }
        }, [data]);

        const addToCart = (pizza) => {

            const findProductIndex = cart.findIndex ((item) => item.id === pizza.id);
            const product = {
                id: pizza.id,
                name: pizza.name,
                price: pizza.price,
                count: 1,
                desc: pizza.desc,
                img:pizza.img,
                ingredients:pizza.ing,
            }

            if (findProductIndex >=0){
                cart [findProductIndex].count ++;
                setCart ([...cart]);
            } else {
                setCart ([...cart, product]);
            }
        }

        const increment = (index) => {
            cart [index].count++;
            setCart ([...cart]);
        }

        const decrement = (index) => {
            if (cart[index].count === 1) {
                cart.splice (index, 1);
            } else {
                cart [index].count--;
            }
            setCart ([...cart]);
        }

        const total = cart.reduce ((acc, item) => acc + (item.price * item.count),  0);

        const PizzasProviderValues = {
            pizzas,
            cart,
            loading,
            setCart,
            addToCart,
            increment,
            decrement,
            total
        }
        
        return (
            <PizzasDescription.Provider value = {PizzasProviderValues}>
                {children}
            </PizzasDescription.Provider>
        )
}