import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodoRequest} from './thunks'
import {getTodos} from './selectors'
import './NewTodoForm.css'

const newTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className={'new-todo-form'}>
            <input
                type={'text'}
                className={'new-todo-input'}
                placeholder={'Type your new todo here'}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}/>
            <button
                onClick={() => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue)
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue)
                        setInputValue('')
                    }
                }}
                className={'new-todo-button'}>
                    Create Todo
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: getTodos(state),
})

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(newTodoForm)