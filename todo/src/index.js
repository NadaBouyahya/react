import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
var todoData = [
  {
    "id": 1,
    "name": "ok",
    "status": "done"
  },
  {
    "id": 1,
    "name": "todoData",
    "status": "done"
  }, {
    "id": 1,
    "name": "todoData",
    "status": "done"
  }
]
function TodoContainer() {
  return (
    <>
      <TodoInput />
      <TodoList myList={todoData} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoContainer />
);