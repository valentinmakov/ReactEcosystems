import React from 'react'
import styled from 'styled-components'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`

const TodoList = ({isLoading, incompleteTodos, completedTodos, onRemovePressed, onCompletedPressed}) => {
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

export default TodoList