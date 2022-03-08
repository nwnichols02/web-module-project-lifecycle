import React from 'react'

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    this.props.handleAdd(this.state.input);

    
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }
  
  render(){
    return(
      <form>
      <input onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}>Add to List</button>
    </form>
    )
  }
}

export default Form;
