import React from "react"
import Form from "./Form"
import List from "./List"

const App = ({ todos }) => {
    return (
        <div>
            <Form />
            <List todos={todos} />
        </div>
    )
}

export default App