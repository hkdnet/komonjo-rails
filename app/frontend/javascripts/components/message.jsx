const React = require('react');
const Komonjo = require('../komonjo.js');
const MessageIcon = require('./message-icon.jsx');


class Message extends Komonjo.BaseComponent {
  render() {
    let message = this.props.message;
    let messageText = this.convertMessageText(message.text);
    return (
      <div>
        <MessageIcon
          src={message.user.profile.image48}
          alt={`${message.user.name}'s icon`}
        ></MessageIcon>
        <div>
          {message.user.name}<br />
          {messageText}
        </div>
      </div>
    );
  }

  convertMessageText(text) {
    Komonjo.store.emojis.reduce((prev, e) => {
      const reg = new RegExp(`:${e.name}:`, 'mg');
      return prev.replace(reg, e.url);
    }, text);
  }
}

module.exports = Message;
