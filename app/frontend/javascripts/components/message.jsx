const React = require('react');
const Komonjo = require('../komonjo.js');
const MessageIcon = require('./message-icon.jsx');


class Message extends Komonjo.BaseComponent {
  render() {
    let message = this.props.message;
    return (
      <div>
        <MessageIcon
          src={message.user.profile.image48}
          alt={`${message.user.name}'s icon`}
        ></MessageIcon>
        <div>
          {message.user.name}<br />
          {message.text}
        </div>
      </div>
    );
  }
}

module.exports = Message;
