import {createStore, combineReducers} from 'redux'
import {todos} from './todos/reducer'

const reducers = {
    todos,
}
const rootReucer = combineReducers(reducers)

export const configureStore = () => createStore(rootReucer)