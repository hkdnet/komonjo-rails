const React = require('react');

class MessageList extends React.Component {
  render() {
    let messages = this.props.messages.map(e => {
      return (
        <li key={ e.ts }>
          { e.user.name }
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
