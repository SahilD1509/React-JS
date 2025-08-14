import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "Hello!..." };
  }

  updateHandler(newMsg) {
    this.setState({ msg: newMsg });
  }

  render() {
    return (
      <div>
        <h3>Message Componrnt</h3>
        <hr />
        <h3>Message Value: {this.state.msg}</h3>
        <button onClick={this.updateHandler.bind(this, "Good Morning")}>GM</button>
        <button onClick={this.updateHandler.bind(this, "Good Afternoon")}>GA</button>
        <button onClick={this.updateHandler.bind(this, "Good Evening")}>GE</button>
        <button onClick={this.updateHandler.bind(this, "Good Night")}>GN</button>
      </div>
    );
  }
}

export default Message;
