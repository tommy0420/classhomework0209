import React from "react"

const Item = ({ todo, deleteTodo }) => {
    const handleDelete = () => {
        deleteTodo(todo.id)
    }
    return (
        <li>
            <p>{todo.note}</p>
            <button
                type="text"
                onClick={handleDelete}
            >
                削除
            </button>
        </li>
    )
}
export default Item