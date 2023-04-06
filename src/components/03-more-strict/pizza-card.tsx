import {FC, useState} from 'react';
import Image from "next/image";
import { Pizza, PizzaOnOrder } from "./types";
import { extraIngredients, getExtraIngredients } from './menu';
import LabeledCheckbox from '../checkbox';

type TPizzaCardProps = {
    pizza: Pizza,
    addToBasket: (pizza: PizzaOnOrder) => void
}


const PizzaCard: FC<TPizzaCardProps> = ({
    pizza,
    addToBasket
}) => {

    const [extras, setExtras] = useState<string[]>([]);



    function handleExtras(extra: string) {
        if(extras.includes(extra)){
            return setExtras(extras.filter((x) => x !== extra))
        } 

        return setExtras([...extras, extra])
    }

    return ( 
        <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 relative">
            <Image src={pizza.image} className="object-cover aspect-square w-full rounded-t" height="100" width="100" alt={pizza.name}></Image>
            <div className="px-4 py-2">
                <p className="font-medium">Ingredients</p>
                <p className="font-light">{pizza.ingredients.join(", ")}</p>
            </div>
            <div className="px-4 py-2">
                <p className="text-base font-medium">Add ons:</p>
                {
                    pizza.extras.map((extra, idx) => (
                        <LabeledCheckbox 
                        key={idx}
                        value={extra}               
                        checked={extras.includes(extra)}
                        onChange={(e) => handleExtras(e.target.value)}
                        >
                        <span className="text-sm">{extra}</span>
                        </LabeledCheckbox>
                    ))
                }
            <button onClick={() => addToBasket({...pizza, extraIngredients: extras.map(getExtraIngredients) })} className="p-2 bg-red-700 my-2 text-white rounded-md text-base">Add to Cart</button>
            </div>
        </div>
    );
}

export default PizzaCard;