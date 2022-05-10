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


 handleAdd = (task) => {

  const newTodo = {
    task: task,
    id: Date.now(),
    completed: false
  }

   this.setState({
     ...this.state,
     todos: [...this.state.todos, newTodo]
   })
 }


 handleToggle = (clickedId) => {

  this.setState({
    ...this.state, 
    todos: this.state.todos.map(todo => {
      if (todo.id === clickedId){
        return {
          ...todo, 
          completed: !todo.completed
        }
      } 
        return todo;
    })
  })
 }

  render() {

    const { todos } = this.state;
    return (
      <div>
       <h1>Todos</h1>

        <TodoList handleToggle={this.handleToggle} todos={todos} />
      
       <Form handleAdd={this.handleAdd} />
       <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
