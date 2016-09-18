const React = require('react');
const Komonjo = require('../komonjo.js');

class Header extends Komonjo.BaseComponent {
  render() {
    return (
      <header>
        <h1>
          { this.props.title }
        </h1>
      </header>
    );
  }
}

module.exports = Header;
