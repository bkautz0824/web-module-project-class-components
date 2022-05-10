import React from 'react'
import TodoList from './TodoList'
import Form from './Form'




export default class App extends React.Component {


   state = {
    todos: [
      {
        task: "walk the dog",
        id: 1,
        completed: false
      },
      {
        task: "take out trash",
        id: 2,
        completed: false
      },
      {
        task: "workout",
        id: 3,
        completed: false
      },
    ]
   }
 


  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  render() {

    const { todos } = this.state;
    return (
      <div>
       <h1>Todos</h1>

       <ul>
         {
           todos.map(todo => {
            return (<li>{todo.task} { todo.completed? <span>Completed</span> : <span></span>} </li>)
          })
         }
       </ul>
       <form>
         <input />
         <button>Add</button> 
       </form>
       <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
