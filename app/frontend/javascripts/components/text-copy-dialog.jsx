const React = require('react');
const Komonjo = require('../komonjo.js');

class TextCopyDialog extends Komonjo.BaseComponent {
  render() {
    return (
      <div>
        <textarea readOnly="true">{ this.props.text }</textarea>
        <button>copy</button>
      </div>
    );
  }
}

module.exports = TextCopyDialog;
