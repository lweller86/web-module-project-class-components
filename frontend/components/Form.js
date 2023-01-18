import React from 'react'


export default class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  handleSubmit = (e) => {
 
    e.preventDefault();
    this.props.handleAdd(this.state.input);


  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
    input: e.target.value
  })

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
