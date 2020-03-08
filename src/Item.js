import React from "react"

const Item = ({
    todo,
    deleteTodo,
    id,
    toggleIsDone
}) => {
    const handleDelete = () => {
        if (window.confirm("本当に削除しますか？")) {
            deleteTodo(id)
        }
    }
    return (
        <li>
            <input
                type="checkbox"
                onChange={() => {
                    toggleIsDone(id)
                }}
            />
            <span>{todo.note}</span>
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