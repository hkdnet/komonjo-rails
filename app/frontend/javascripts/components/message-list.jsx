const React = require('react');
const ReactDOM = require('react-dom');
const Komonjo = require('../komonjo.js');
const Message = require('./message.jsx');
const ScrollableContainer = require('./scrollable-container.jsx');

class MessageList extends Komonjo.BaseComponent {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.selectedChannel != nextProps.selectedChannel ||
      this.props.messages.length != nextProps.messages.length;
  }

  render() {
    let messages = this.generateMessages();
    return (
      <ScrollableContainer defaultPosition="bottom">
        <ul>
          { messages }
        </ul>
      </ScrollableContainer>
    );
  }

  generateMessages() {
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
    return messages.reverse();
  }
}

module.exports = MessageList;
