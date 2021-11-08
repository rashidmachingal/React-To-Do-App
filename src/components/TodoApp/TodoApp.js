import React, { Component } from 'react'
import './TodoApp.css'

class TodoApp extends Component {

    state = {
        input: "",
        items: []
    }


    handleChange = (event) =>{
        this.setState({
            input: event.target.value
        })
    }

    storeItems = (event) =>{
        event.preventDefault()
        const {input} = this.state;

        this.setState({
            items: [...this.state.items,input],
            input: ""
        })

    }

    deleteItem = (key) =>{
        const allItems = this.state.items;

        allItems.splice(key,1);

        this.setState({
            items:allItems
        })
    }

    render() {
        const {input,items} = this.state

        

        return (
            <div className="todo-container">

                <form className="input-section" onSubmit={this.storeItems}>
                <h1>Todo App</h1>
                    <input type="text" value={input} onChange={this.handleChange} placeholder="Enter Items..." /> 
                </form>

                <ul>
                   {items.map((data,index)=>(
                       <li key={index}>{data} <i onClick={() => this.deleteItem(index)} className="fas fa-trash-alt"></i></li>
                   ))}
                </ul>
            </div>
        )
    }
}

export default TodoApp