import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <ul>
          <li>Walk Dog</li>
          <li>Work Out</li>
          <li>Take out Trash</li>
        </ul>
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
