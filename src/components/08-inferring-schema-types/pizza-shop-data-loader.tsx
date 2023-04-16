import { FC } from 'react';

import useSWR from 'swr';
import {PizzaSchema, ExtraIngredientsSchema} from './types';
import PizzaShop from './pizza-shop';

const server = 'http://localhost:3000';

const PizzaShopDataLoader: FC = () => {
    const { data: pizzas, error: pizzaErr } = useSWR<PizzaSchema[]>(`/api/pizzas`, async(resource, init): Promise<PizzaSchema[]> => {
        const res = await fetch(`${server}${resource}`, init);
        const {data} = await res.json();
        
        return data;
    })

    const { data: extraIngredients, error: extraErr } = useSWR<ExtraIngredientsSchema>(`/api/extraingredients`, async(resource, init): Promise<ExtraIngredientsSchema> => {
        const res = await fetch(`${server}${resource}`, init);
        const {data} = await res.json();
        
        return data;
    })
    
    if(pizzaErr || extraErr) {
        return (
            <div className="text-center bg-red-600">
                <p className="py3">Something went wrong.</p>
            </div>
        )
    }
    

    if(!pizzas && !extraIngredients){
        return (
            <div className="text-center">
                <p className="text-2xl">Loading...</p>
            </div>
        )
    }

    return <PizzaShop pizzas={pizzas!} extraIngredients={extraIngredients!}/>
}
 
export default PizzaShopDataLoader;