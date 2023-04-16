import { object, string, number, record, TypeOf, array} from 'zod';

export const extraIngredientSchema = object({
    name: string(),
    price: number()
})

export const pizzaSchema = object({
    name: string(),
    ingredients: string().array(),
    image: string(),
    price: number().positive(),
    extras: string().array(),
});

export const pizzasSchema = array(pizzaSchema);

export const extraIngredientsSchema = record(extraIngredientSchema);


