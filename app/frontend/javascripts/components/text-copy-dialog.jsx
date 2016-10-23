const React = require('react');
const Komonjo = require('../komonjo.js');

class TextCopyDialog extends Komonjo.BaseComponent {
  render() {
    return (
      <div onClick={ this.cancelClick }>
        <textarea readOnly="true">{ this.props.text }</textarea>
        <button onClick={ this.onCopyButtonClickHandler.bind(this) }>copy</button>
      </div>
    );
  }

  cancelClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  onCopyButtonClickHandler(e) {
    console.log('copy');
  }
}

module.exports = TextCopyDialog;