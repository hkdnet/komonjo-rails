const React = require('react');
const Komonjo = require('../komonjo.js');
const Message = require('./message.jsx');

class MessageText extends Komonjo.BaseComponent {
  render() {
    return (
      <div>
        { this.former }
        { this.latter }
      </div>
    );
  }

  get former() {
    const tmp = this._splitText[0];
    const emoji = Komonjo.store.emojis.find(e => e.name === tmp);
    if (emoji) {
      return (
        <img src={ emoji.url } alt={ emoji.name }></img>
      );
    }
    return (
      <span>{ tmp }</span>
    );
  }
  get latter() {
    const tmp = this._splitText[1];
    if (!tmp) {
      return "";
    }
    return (
      <MessageText text={tmp}></MessageText>
    );
  }

  get _splitText() {
    if (this.__splitText) {
      return this.__splitText;
    }
    return this.__splitText = this.props.text.split(':', 2);
  }
}

module.exports = MessageText;
