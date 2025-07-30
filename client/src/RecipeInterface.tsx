export interface Ingredient {
    ingredient_id: number;
    recipe_id: number;
    amount: number;
    unit: string | null;
    name: string;
}

export interface Recipe {
    recipe_id: number;
    title: string;
    prep_time: string;
    description: string;
    instructions: string[];
    imageurls: string[];
    ingredients: Ingredient[];
}