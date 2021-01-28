import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import {loadTodo, removeTodoRequest, markTodoAsCompletedRequest} from './thunks'
import {
    getTodos,
    getIsLoading,
    getIncompleteTodos,
    getCompletedTodos,
} from './selectors'
import './TodoList.css'

const TodoList = ({incompleteTodos, completedTodos, onRemovePressed, onCompletedPressed, startLoadingTodos, isLoading}) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className={'list-wrapper'}>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo =>
                <TodoListItem
                    todo={todo}
                    onCompletedPressed={onCompletedPressed}
                    onRemovePressed={onRemovePressed}/>
            )}
            <h3>Completed:</h3>
            {completedTodos.map(todo =>
                <TodoListItem
                    todo={todo}
                    onCompletedPressed={onCompletedPressed}
                    onRemovePressed={onRemovePressed}/>
            )}
        </div>
    )
    return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    incompleteTodos: getIncompleteTodos(state),
    completedTodos: getCompletedTodos(state),
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodo()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)