import React, { Component } from 'react';

export default class ButtonClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      
    };
  }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    console.log(this.state);
    return (
      <div onClick={this.inc}>{this.state.count}</div>
    );
  }
}
