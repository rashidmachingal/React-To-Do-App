import React, { Component } from 'react'
import './TodoApp.css'

class TodoApp extends Component {
    render() {
        return (
            <div className="todo-container">
                <h1>Todo App</h1>

                <div className="input-section">
                    <input type="text" />
                    <button>Add</button>
                </div>
            </div>
        )
    }
}

export default TodoApp