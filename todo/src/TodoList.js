import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props){
    return(
        <ul>
            {props.myList.map((item) => <TodoItem key={item.id} name={item.name} status={item.status}/>)}
        </ul>
    )
}

export default TodoList;