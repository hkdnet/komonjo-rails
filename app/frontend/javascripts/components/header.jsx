const React = require('react');
const Komonjo = require('../komonjo.js');
const GenerateButton = require('./generate-button.jsx');

class Header extends Komonjo.BaseComponent {
  extractState(store) {
    return {
      disabled: !store.isGeneratable
    };
  }
  render() {
    return (
      <header>
        <h1>
          { this.props.title }
        </h1>
        <GenerateButton
          disabled={ this.state.disabled }></GenerateButton>
      </header>
    );
  }
}

module.exports = Header;
