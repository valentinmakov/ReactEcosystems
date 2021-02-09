import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TodoList from './TodoList'
import {getIsLoading, getIncompleteTodos, getCompletedTodos} from './selectors'
import {loadTodo, removeTodoRequest, markTodoAsCompletedRequest} from './thunks'

const TodoListContainer = () => {
    const isLoading = useSelector(getIsLoading)
    const incompleteTodos = useSelector(getIncompleteTodos)
    const completedTodos = useSelector(getCompletedTodos)

    const dispatch = useDispatch()
    const startLoadingTodos = () => dispatch(loadTodo())
    const onRemovePressed = id => dispatch(removeTodoRequest(id))
    const onCompletedPressed = id => dispatch(markTodoAsCompletedRequest(id))

    useEffect(() => {
        startLoadingTodos()
    }, [])

    const props = {
        isLoading,
        incompleteTodos,
        completedTodos,
        startLoadingTodos,
        onRemovePressed,
        onCompletedPressed,
    }

    return (
        <TodoList {...props} />
    )
}

export default TodoListContainer