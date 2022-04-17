import React, { Component, useDebugValue } from 'react';
import axios from 'axios';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cust_name: '',
      email: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addInfo = (e) => {
    const task = { cust_name: this.state.cust_name, email: this.state.email };
    e.preventDefault();

    if (task.cust_name && task.cust_name.length > 0) {
      axios
        .post('/api/infos', task)
        .then((res) => {
          if (res.data) {
            this.props.getInfos();
            this.setState({ cust_name: '' });
            this.setState({ email: '' });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            name= "cust_name"
            type= "text"
            value={this.state.cust_name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            name= "email"
            type= "email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <p></p>
        <button onClick={this.addInfo}>Submit Info</button>
      </form>
    );
  }
}

export default Input;