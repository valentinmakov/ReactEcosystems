import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import {loadTodo, removeTodoRequest, markTodoAsCompletedRequest} from './thunks'
import {
    getIsLoading,
    getIncompleteTodos,
    getCompletedTodos,
} from './selectors'

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`

const TodoList = ({incompleteTodos, completedTodos, onRemovePressed, onCompletedPressed, startLoadingTodos, isLoading}) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <ListWrapper>
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
        </ListWrapper>
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