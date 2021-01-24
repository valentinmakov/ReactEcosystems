import {createStore, combineReducers} from 'redux'

const reducers = {}
const rootReucer = combineReducers(reducers)

export const configureStore = () => createStore(rootReucer)