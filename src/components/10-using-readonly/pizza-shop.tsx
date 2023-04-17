
import MyCart from './my-cart'
import { pizzas } from './menu';
import PizzaCard from './pizza-card';
import { PizzaOnOrder } from "./types";
import { useState, useMemo } from "react";

const PizzaShop = () => {
    const [order, setOrder] = useState<PizzaOnOrder[]>([]);

    return ( 
        <div className="container">
            <h3 className="text-center text-2xl font-bold">Bart&apos;s Pizza Shop</h3>
            <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr] my-4 lg:grid-cols-[3fr_1fr]">
                <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "> 
                    {
                        pizzas.map((pizza, idx) => (
                        <PizzaCard pizza={pizza} key={idx} addToBasket={(p) => setOrder((order) => [...order, p])}/>
                        ))
                    }
                </div>
                <MyCart orders={order} />
            </div>
        </div>
    );
}

export default PizzaShop;