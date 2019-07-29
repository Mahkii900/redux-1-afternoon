import {createStore} from 'redux'

//INITIAL STATE
const initialState = {

}

//ACTION CONSTS

//REDUCER
const reducer(state = initialState, action) {
    switch(action.type) {
        default: return state
    }
}

//EXPORTER
export default createStore(reducer)