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
            text={ this.text }
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

  get text() {
    let message = this.props.message;
    return Object.getOwnPropertyNames(message.meta).reduce((prev, e) => {
      let key = "${" + e + "}";
      let value = this.createContent(e, message.meta[e]);
      return prev.replace(key, value);
    }, message.text);
  }

  createContent(type, meta) {
    if (type.indexOf('reply') >= 0) {
      return meta;
    }
    if (type.indexOf('url') >= 0) {
      return meta;
    }
  }
}

module.exports = Message;
