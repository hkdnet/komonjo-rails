const React = require('react');
const Komonjo = require('../komonjo.js');
const Message = require('./message.jsx');

class MessageIcon extends Komonjo.BaseComponent {
  render() {
    return (
      <div>
        <img src={ this.props.src } alt={ this.props.alt } />
      </div>
    );
  }
}

module.exports = MessageIcon;
