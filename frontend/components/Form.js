import e from 'cors';
import React from 'react'
import ReactDom from "react-dom"




export default class Form extends React.Component {


handleNameInput = e => {
  this.setState({ name: e.target.value })
}




  render() {
    return (
      <div>
        <form>
          <h2>Add to the ToDo List below:</h2>
          <input placeholder='Name' onChange={this.handleNameInput}/>
          <Button 
          onClick={this.handleClick}>Click When Complete
          </Button>
          
        </form>
      </div>
    )
  }
}
