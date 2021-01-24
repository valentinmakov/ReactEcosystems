import React from 'react'
import {connect} from 'react-redux'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import {
    markTodoAsRead,
    removeTodo,
} from './actions'
import './TodoList.css'

const TodoList = ({todos = [], onRemovePressed, onMarkTodoAsReadPressed}) => (
    <div className={'list-wrapper'}>
        <NewTodoForm />
        {todos.map(todo =>
            <TodoListItem
                todo={todo}
                onMarkTodoAsReadPressed={onMarkTodoAsReadPressed}
                onRemovePressed={onRemovePressed}/>
        )}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkTodoAsReadPressed: text => dispatch(markTodoAsRead(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)