import React, { useState } from "react"

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        // 空の場合は、アラートを出し、処理を中断させる
        if (!value) {
            alert("入力してください")
            return
        }

        addTodo(value)

        setValue('')
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
                onChange={handleChange}
            />
            <button type="submit">追加</button>
        </form>
    )
}

export default Form