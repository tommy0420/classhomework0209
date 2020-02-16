import React from "react"
import Item from "./Item"

// mapメソッドを用いてItemを回す
// mapメソッド→配列の要素全てに同じ処理をするもの

const List = ({ todos }) => {
    return (
        <ul>
            <Item todo={todos[0]} />
            <Item todo={todos[1]} />
            <Item todo={todos[2]} />
            <Item todo={todos[3]} />
        </ul>
    )
}

export default List 