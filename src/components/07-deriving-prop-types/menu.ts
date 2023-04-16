import { ExtraIngredient, ExtraIngredients, Pizza } from './types';
import { ExtraIngredientsSchema, PizzaSchema } from './pizzaSchema';

export const pizzas: PizzaSchema[] = [
    {
        name: 'Pizza Margherita',
        ingredients: ['tomato sauce', 'mozzarella', 'basil'],
        image: '/assets/images/pizza-margherita.jpeg',
        price: 499,
        extras: ['olives'],
    },
    {
        name: 'Pizza Hawaii',
        ingredients: ['tomato sauce', 'mozzarella', 'prosciutto', 'pineapple'],
        image:  '/assets/images/pizza-hawaii.jpg',
        price: 599,
        extras: ['cheese', 'pepperoni', 'tomatoes'],
    },
    {
        name: 'Pizza Salami',
        ingredients: ['tomato sauce', 'mozzarella', 'mushrooms', 'garlic'],
        image:  '/assets/images/pizza-salami.jpeg',
        price: 599,
        extras: ['cheese', 'mushrooms'],
    },
    {
        name: 'Pizza Spinach',
        ingredients: ['fresh spinach', 'Alfredo sauce', '2 medium tomatoes', ],
        image:  '/assets/images/pizza-spinach.jpg',
        price: 599,
        extras: ['cream'],
    },
    {
        name: 'Pizza Mozzarella',
        ingredients: ['salt & pepper', 'olive oil', 'garlic', 'chili flakes' ],
        image:  '/assets/images/pizza-mozzarella.jpg',
        price: 599,
        extras: ['basil', 'cheese'],
    },
] 

export const extraIngredients: ExtraIngredients = {
    cheese: {
        name:"Cheese",
        price:40
    },
    pepperoni:{
        name: "Green and red bell pepper",
        price:50
    },
    tomatoes: {
        name: "Tomatoes",
        price:30
    },
    olives:{
        name: "Olives",
        price:20
    },
    mushrooms:{
        name: "Mushrooms",
        price:60
    },
    basil:{
        name: "Basil",
        price:70
    },
    cream:{
        name:"Cream",
        price:80
    }
}

export const getExtraIngredients = (name: string) : ExtraIngredient => extraIngredients[name] ?? { name, price: 0 };
