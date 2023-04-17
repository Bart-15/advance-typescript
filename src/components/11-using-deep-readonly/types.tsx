export type Pizza = {
    name: string;
    ingredients: string[];
    image: string;
    price: number;
    extras: string[];
};

export type ExtraIngredients = Record<string, ExtraIngredient>;

export type ExtraIngredient = Readonly<{
    name: string;
    price: number;
}>;

export type PizzaOnOrder = {
    name: string;
    price: number;
    extraIngredients: ExtraIngredient[];
};

export type DeepReadonly<T> = {
    readonly [Key in keyof T] : T[Key] extends object ? DeepReadonly<T[Key]> : T[Key]
}