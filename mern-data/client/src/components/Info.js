import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';

class Info extends Component {
  state = {
    infos: [],
  };

  componentDidMount() {
    this.getInfos();
  }

  getInfos = () => {
    axios
      .get('/api/infos')
      .then((res) => {
        if (res.data) {
          this.setState({
            infos: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteInfo = (id) => {
    axios
      .delete(`/api/infos/${id}`)
      .then((res) => {
        if (res.data) {
          this.getInfos();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { infos } = this.state;

    return (
      <div>
        <Input getInfos={this.getInfos} />
      </div>
    );
  }
}

export default Info;