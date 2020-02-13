import React from "react"
import Item from "./Item"

const List = ({ songs }) => {
    return (
        <ul>
            <Item song={songs[0]} />
            <Item song={songs[1]} />
            <Item song={songs[2]} />
        </ul>
    )
}

export default List 