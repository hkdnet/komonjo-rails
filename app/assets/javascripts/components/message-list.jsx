const React = require('react');
const Komonjo = require('../komonjo.js');
const Message = require('./message.jsx');

class MessageList extends Komonjo.BaseComponent {
  render() {
    let messages = this.props.messages.map(e => {
      return (
        <li key={ e.ts }>
          <Message message={ e }></Message>
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
