const React = require('react');
const Message = require('./message.jsx');

class MessageList extends React.Component {
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
