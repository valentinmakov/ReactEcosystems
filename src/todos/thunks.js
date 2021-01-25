import {
    loadTodosInProgress,
    loadTodosSuccess,
    loadTodosFailure,
} from './actions'

export const loadToto = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress())

        const reponse = await fetch('http://localhost:8080/todos')
        const todos = await reponse.json()
        console.log(todos)
    
        dispatch(loadTodosSuccess(todos))
    } catch (e) {
        dispatch(loadTodosFailure())
        dispatch(displayAlert(e))
    }
    
}

export const displayAlert = text => () => {
    alert(text)
}