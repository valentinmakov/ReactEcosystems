import React from 'react'
import styled from 'styled-components'
import {hot} from 'react-hot-loader'
import TodoListContainer from './todos/TodoListContainer'

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
    width: 100vw;
    height: 100vh;
`

const App = () => (
    <AppContainer>
        <TodoListContainer />
    </AppContainer>
)

export default hot(module)(App)