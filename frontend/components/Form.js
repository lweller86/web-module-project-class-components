import React from 'react'


export default class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.value);


  }

  handleChange = (e) => {
    this.setState[{
      ...this.state,
    input: e.target.value
  }]
  console.log(this.state)
  console.log(e.target.value)
}

  
  render() {
    
    return (

      <form>
        <input value={this.state.input} onChange={this.handleChange} />
        <button
          onClick={this.handleSubmit}>Click When Complete
        </button>
      </form>

    )
  }
}
