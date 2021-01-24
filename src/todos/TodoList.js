import React from 'react'
import {connect} from 'react-redux'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import {
    markTodoAsCompleted,
    removeTodo,
} from './actions'
import {displayAlert} from './thunks'
import './TodoList.css'

const TodoList = ({todos = [], onRemovePressed, onCompletedPressed, onDisplayAlertClicked}) => (
    <div className={'list-wrapper'}>
        <NewTodoForm />
        {todos.map(todo =>
            <TodoListItem
                todo={todo}
                // onCompletedPressed={onCompletedPressed}
                onCompletedPressed={onDisplayAlertClicked}
                onRemovePressed={onRemovePressed}/>
        )}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)