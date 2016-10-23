const React = require('react');
const Komonjo = require('../komonjo.js');
const GenerateButton = require('./generate-button.jsx');

class Header extends Komonjo.BaseComponent {
  render() {
    return (
      <header>
        <h1>
          { this.props.title }
        </h1>
        <GenerateButton></GenerateButton>
      </header>
    );
  }
}

module.exports = Header;
