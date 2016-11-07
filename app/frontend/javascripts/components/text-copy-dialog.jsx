const React = require('react');
const Komonjo = require('../komonjo.js');
const ClipboardButton = require('react-clipboard.js');

class TextCopyDialog extends Komonjo.BaseComponent {
  render() {
    return (
      <div onClick={ this.cancelClick }>
        <div>{ this.props.text }</div>
        <ClipboardButton data-clipboard-text={ this.props.text }>
          copy to clipboard
        </ClipboardButton>
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
