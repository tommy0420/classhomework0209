import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const todos = [
    "学校行く",
    "部活する",
    "音楽聴く",
    "寝る"
]

ReactDOM.render(
    <App todos={todos} />,
    document.getElementById("root")
)