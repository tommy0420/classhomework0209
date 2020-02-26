import React, { useState } from "react"
import Form from "./Form"
import List from "./List"

const App = () => {
    const [todos, setTodos] = useState([
        {
            note: "音楽聴く",
            id: 0,
        },
        {
            note: "寝る",
            id: 1,
        },
    ])

    const addTodo = (value) => {
        setTodos(todos.concat({
            note: value,
            id: todos.length
        }))
    }

    const deleteTodo = (id) => {
        const newTodos = todos.slice()
        newTodos.splice(id, 1)

        //idの振り直し
        newTodos.map(
            (todo, i) => {
                console.log(i)
                return (
                    todo.id = i,
                    todo.note = todo.note
                )
            }
        )

    }

    return (
        <div>
            <Form
                addTodo={addTodo}
            />
            <List
                todos={todos}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

export default App