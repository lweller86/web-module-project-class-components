import React from 'react'

import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos:  [
        {
          task: 'Organize Garage',
          id: 1528817077286, 
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }


  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>ToDo App</h1>
        <TodoList todos={todos}/>
        
        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>
          completed

        </button>

      </div>
    )
  }
}
