const React = require('react');
const Komonjo = require('../komonjo.js');
const Message = require('./message.jsx');

class MessageList extends Komonjo.BaseComponent {
  render() {
    let messages = this.props.messages.map((e, i) => {
      return (
        <li key={ e.ts }>
          <Message
            idx={ i } selected={ e.selected }
            message={ e } selectedChannel={ this.props.selectedChannel }
          ></Message>
        </li>
      );
    });
    return (
      <ul>
        { messages }
      </ul>
    );
  }
}

module.exports = MessageList;
