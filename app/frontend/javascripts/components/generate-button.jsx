const React = require('react');
const Komonjo = require('../komonjo.js');

class GenerateButton extends Komonjo.BaseComponent {
  render() {
    return (
      <button
        onClick={ this.onClickHandler.bind(this) }
        disabled={ this.props.disabled && "disabled" }
      >generate</button>
    );
  }

  onClickHandler(e) {
    this.store.onUpdateShowModal(true);
    e.stopPropagation();
    e.preventDefault();
  }
}

module.exports = GenerateButton;
