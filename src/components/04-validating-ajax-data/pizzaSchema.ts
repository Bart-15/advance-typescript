import { object, string, number, record, TypeOf} from 'zod';

export const extraIngredients = object({
    name: string(),
    price: number()
})

export const pizzaSchema = object({
    name: string(),
    ingredients: string().array(),
    image: string(),
    price: number().positive(),
    extras: string().array(),
})



export type ExtraIngredientsSchema = typeof record<typeof extraIngredients>;

export type PizzaSchema = TypeOf<typeof pizzaSchema>;