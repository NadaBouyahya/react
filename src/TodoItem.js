import React from "react";
import ReactDOM from 'react-dom/client';

function TodoItem(props) {
    return (
        <li>{props.name}</li>
    )
}

export default TodoItem;