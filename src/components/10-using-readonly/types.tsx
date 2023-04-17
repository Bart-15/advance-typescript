type ReadOnly<TInput> = {
    readonly [Key in keyof TInput]: TInput[Key]
}

export type Pizza = {
    name: string;
    ingredients: string[];
    image: string;
    price: number;
    extras: string[];
};

export type ExtraIngredients = Record<string, ExtraIngredient>;

export type TExtraIngredient = {
    name: string;
    price: number;
}

export type ExtraIngredient = ReadOnly<TExtraIngredient>

export type PizzaOnOrder = {
    name: string;
    price: number;
    extraIngredients: ExtraIngredient[];
};



