import { TypeOf, record, z } from 'zod';
import {
    extraIngredientSchema,
    extraIngredientsSchema,    
    pizzaSchema,
} from './pizzaSchema'

export type ExtraIngredientSchema = TypeOf<typeof extraIngredientSchema>

export type ExtraIngredientsSchema = TypeOf<typeof extraIngredientsSchema>

export type PizzaSchema = TypeOf<typeof pizzaSchema>;

export type PizzaOnOrder = Pick<PizzaSchema, "name" | "price"> & {
    extraIngredients: ExtraIngredientSchema[]
}


/**Using infer */
// export type Pizza = z.infer<typeof pizzaSchema>;

// export type ExtraIngredients = z.infer<typeof extraIngredientsSchema>;

// export type ExtraIngredient = z.infer<typeof extraIngredientSchema>;



//Omit and Pick example
type Cat = {
    name: string;
    color:string;
    age:number;
}

type CatWithNameAge = Omit<Cat, "color">;
type CatWithColorAge = Pick<Cat, "color" | "age">
