const React = require('react');
const Komonjo = require('../komonjo.js');

class GenerateButton extends Komonjo.BaseComponent {
  render() {
    return (
      <button
        onClick={ this.onClickHandler.bind(this) }
      >generate</button>
    );
  }

  onClickHandler(e) {
    console.log('generate button is clicked');
    e.stopPropagation();
    e.preventDefault();
  }
}

module.exports = GenerateButton;
