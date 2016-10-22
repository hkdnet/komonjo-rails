const React = require('react');
const Komonjo = require('../komonjo.js');

class Emoji extends Komonjo.BaseComponent {
  _render() {
    return (
      <img
        src={ this.props.url }
        alt={ this.props.alt }
      ></img>
    );
  }
}

module.exports = Emoji;

