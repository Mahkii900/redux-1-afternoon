import {createStore} from 'redux'

//INITIAL STATE
const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirstName: '',
    authorLastName: ''
}

//ACTION CONSTS
export const UPDATE_RECIPE_NAME = 'EXPORT_RECIPE_NAME'
export const UPDATE_RECIPE_CATEG = 'EXPORT_RECIPE_CATEG'
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'

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
        default: return state
    }
}

//EXPORTER
export default createStore(reducer)