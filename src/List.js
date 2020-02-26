import React from "react"
import Item from "./Item"

// mapメソッドを用いてItemを回す
// mapメソッド→配列の要素全てに同じ処理をするもの

const List = ({ todos, deleteTodo }) => {

    const row = todos.map(todo =>
        <Item
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
        />)
    return (
        <ul>
            {row}
        </ul>
    )
}

export default List 