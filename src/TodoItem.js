import React from 'react'


function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "gray",
        textDecoration: 'line-through'
    }
    return (
        <div className="todo-item">
            <label>
                <input defaultChecked={props.completed} type="checkbox" onChange={() => props.handleChange(props.id)} />
                <p>{props.text}</p> 
            </label>
        </div>
    )
}

export default TodoItem
