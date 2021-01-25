import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import {
    markTodoAsCompleted,
    removeTodo,
} from './actions'
import {loadToto} from './thunks'
import './TodoList.css'

const TodoList = ({todos = [], onRemovePressed, onCompletedPressed, startLoadingTodos, isLoading}) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className={'list-wrapper'}>
            <NewTodoForm />
            {todos.map(todo =>
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
    isLoading: state.isLoading,
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadToto()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)