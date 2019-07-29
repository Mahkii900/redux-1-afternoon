import {createStore} from 'redux'

//INITIAL STATE
const initialState = {
    recipeName: '',
    recipeCategory: ''
}

//ACTION CONSTS
export const UPDATE_RECIPE_NAME = 'EXPORT_RECIPE_NAME'
export const UPDATE_RECIPE_CATEG = 'EXPORT_RECIPE_CATEG'

//REDUCER
function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_RECIPE_NAME:
            return {...state, recipeName: action.payload}
        case UPDATE_RECIPE_CATEG:
            return {...state, recipeCategory: action.payload}
        default: return state
    }
}

//EXPORTER
export default createStore(reducer)