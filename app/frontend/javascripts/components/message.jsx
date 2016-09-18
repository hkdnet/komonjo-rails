const React = require('react');
const Komonjo = require('../komonjo.js');
const MessageIcon = require('./message-icon.jsx');
const MessageText = require('./message-text.jsx');

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
          <MessageText
            text={ message.text }
          ></MessageText>
        </div>
      </div>
    );
  }

  convertMessageText(text) {
    return Komonjo.store.emojis.reduce((prev, e) => {
      const key = ':' + e.name + ':';
      const imgTag = `<img src="${e.url}" alt="${e.name}">`
      return prev.replace(key, imgTag);
    }, text);
  }
}

module.exports = Message;
