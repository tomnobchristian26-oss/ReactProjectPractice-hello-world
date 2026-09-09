import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Konnichiwa Raihousha",
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    this.setState({
      message: "Korosu",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message} </h1>
        <button onClick={this.changeMessage}>Korosu</button>
      </div>
    );
  }
}

export default Message;
