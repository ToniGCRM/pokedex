import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PokeForm extends Component {
  state = { name: '' , type: '', level: 0 }

  componentDidMount() {
    if (this.props.id) {
      const { name, id, type, level } = this.props
      this.setState({ name, id, type, level })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.props.id) {
      
    } else {
    this.props.addPokemon(this.state)
    }
    this.setState({ name: '', type: '', level: 0 })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { name, type, level } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          label='Name:'
          onChange={this.handleChange}
          required
        />
         <Form.Input
          name='type'
          value={type}
          label='Type:'
          onChange={this.handleChange}
          required
        />
         <Form.Input
          name='level'
          value={level}
          label='Level:'
          onChange={this.handleChange}
          required
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}
export default PokeForm;
