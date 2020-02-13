import React from "react"
import Form from "./Form"
import List from "./List"

const App = ({ songs }) => {
    return (
        <div>
            <Form />
            <List songs={songs} />
        </div>
    )
}

export default App