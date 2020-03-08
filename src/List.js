import React from "react"
import Item from "./Item"

// mapメソッドを用いてItemを回す
// mapメソッド→配列の要素全てに同じ処理をするもの

const List = ({
    todos,
    toggleIsDone,
    deleteTodo,
}) => {

    const row = todos.map((todo, index) =>
        <Item
            todo={todo}
            key={index}
            id={index}
            deleteTodo={deleteTodo}
            toggleIsDone={toggleIsDone}
        />)
    return (
        <ul>
            {row}
        </ul>
    )
}

export default List 