import React from "react";
import styles from './todoInput.module.css';

function TodoInput() {
    return (<>
        <div className={styles.content}>
            <h1>My to do list </h1>
            <p>Enter your task here</p>
            <form>
                <input className={styles.inputStyle} type='text' name="todo_item" />
                <input className={styles.buttonStyle} type='button' name='button' value="ADD" />
            </form>
        </div>
    </>)
};

export default TodoInput;