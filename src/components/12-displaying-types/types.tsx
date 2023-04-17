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

export type PizzaOnOrder = Resolve<
    Pick<Pizza, 'name' | 'price'> & {
        extraIngredients: ExtraIngredient[];
    }
>;

// Taken from https://effectivetypescript.com/2022/02/25/gentips-4-display/
type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };

