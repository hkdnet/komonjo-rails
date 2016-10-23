const React = require('react');
const Komonjo = require('../komonjo.js');

class ModalWall extends Komonjo.BaseComponent {
  render() {
    return (
      <div onClick={ this.onClickHandler.bind(this) }>
        { this.props.children }
      </div>
    );
  }

  onClickHandler(e) {
    this.store.onUpdateShowModal(false);
    e.preventDefault();
    e.stopPropagation();
  }
}

module.exports = ModalWall;
