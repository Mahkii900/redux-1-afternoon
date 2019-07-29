import {createStore} from 'redux'

//INITIAL STATE
const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

//ACTION CONSTS
export const UPDATE_RECIPE_NAME = 'EXPORT_RECIPE_NAME'
export const UPDATE_RECIPE_CATEG = 'EXPORT_RECIPE_CATEG'
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'

//REDUCER
function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_RECIPE_NAME:
            return {...state, recipeName: action.payload}
        case UPDATE_RECIPE_CATEG:
            return {...state, recipeCategory: action.payload}
        case UPDATE_FIRST_NAME:
            return {...state, authorFirstName: action.payload}
        case UPDATE_LAST_NAME:
            return {...state, authorLastName: action.payload}
        case ADD_INGREDIENTS:
            const newIngredients = [...state.ingredients, action.payload]
            return {...state, ingredients: newIngredients}
        case ADD_INSTRUCTIONS:
            const newInstructions = [...state.instructions, action.payload]
            return {...state, instructions: newInstructions}
        case ADD_RECIPE:
            const {
                recipeName,
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredients,
                instructions
            } = state
            const recipe = {
                recipeName,
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredients,
                instructions
            }
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}

        default: return state
    }
}

//EXPORTER
export default createStore(reducer)