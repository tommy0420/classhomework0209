import React, { useState } from "react"
import Form from "./Form"
import List from "./List"

import styled, { createGlobalStyle } from "styled-components"

const App = () => {
    const [todos, setTodos] = useState([
        {
            note: "音楽聴く",
            isDone: false
        },
    ])

    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                note: value,
                isDone: false
            }
        ])
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo, index) => index !== id))
    }

    const toggleIsDone = (id) => {
        const newTodos = todos.slice()
        newTodos[id].isDone = !newTodos[id].isDone
        setTodos(newTodos)
    }

    return (
        <div>
            <GlobalStyle />
            <Title>ToDo App</Title>
            <Form
                addTodo={addTodo}
            />
            <List
                todos={todos}
                deleteTodo={deleteTodo}
                toggleIsDone={toggleIsDone}
            />
        </div>
    )
}

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Trade+Winds&display=swap');
    body {
        background-color: #fff;
    }
`

const Title = styled.h1`
    font-family: "Trade Winds", ;
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    color: gray;
`

export default App