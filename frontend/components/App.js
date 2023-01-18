import React from 'react';
import TodoList from './TodoList';
import TodoForm from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
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
  handleToggle = (clickedId) => {

    

    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } 
          return todo;
        })
      });
    }
  

  handleAdd = (task) => {
console.log(task)
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }


  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }


  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>ToDo App</h1>

        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <TodoForm handleAdd={this.handleAdd} />


        <button onClick={this.handleClear}>
          Clear

        </button>

      </div>
    )
  }
}
