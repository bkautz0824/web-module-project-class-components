import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

const todos = [
  {
    task: "walk the dog",
    id: 1,
    finsished: false
  },
  {
    task: "take out trash",
    id: 2,
    finsished: false
  },
  {
    task: "workout",
    id: 3,
    finsished: false
  },

]


export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todos,
    }
  }



  render() {

    return (
      <div>
        <TodoList  
          todos={this.state.todos}
        />
       <Form  />
      </div>
    )
  }
}
