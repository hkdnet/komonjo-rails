const React = require('react');
const Komonjo = require('../komonjo.js');

class TextCopyDialog extends Komonjo.BaseComponent {
  render() {
    return (
      <div onClick={ this.cancelClick }>
        <textarea
          defaultValue={ this.props.text }
          readOnly="true"></textarea>
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
