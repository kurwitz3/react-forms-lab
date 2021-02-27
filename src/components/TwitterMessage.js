import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
     
    };
  }

  messageHandler = (e) => {
    this.setState({
      message: e.target.value
      })
       
  }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.props.maxChars - this.state.message.length}</p>
        <input type="text"  onChange={event => this.messageHandler(event)} value={this.state.message} name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
