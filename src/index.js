import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const songs = [
    "キセキ",
    "遥か",
    "アイノカタチ"
]

ReactDOM.render(
    <App songs={songs} />,
    document.getElementById("root")
)