import React from 'react'

export default class Todo extends React.Component {


  render() {

    const { data } = this.props;
    console.log('todo', data)
    
    return (
      <div>
        <p>{this.data.todo}</p>
      </div>
    )
  }
}
