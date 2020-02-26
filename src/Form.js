import React, { useState } from "react"

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        //Todoを「どのように」追加するのかApp.js
        addTodo(value)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <form
            action="#"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={value}
                onchange={handleChange}
            />
            <button type="submit">追加</button>
        </form>
    )
}

export default Form