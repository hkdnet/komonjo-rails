const React = require('react');
const Komonjo = require('../komonjo.js');
const Message = require('./message.jsx');

class MessageText extends Komonjo.BaseComponent {
  _render() {
    return (
      <div>
        { this.props.text }
      </div>
    );
  }
}

module.exports = MessageText;
