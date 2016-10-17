const Komonjo = require('./komonjo.js');
const React = require('react');

class PartialMessage {
  constructor(data, options = {}) {
    this._data = data;
    this._options = options;
  }
  get data() { return this._data || {}; }
  get type() { return this.data['type']; }
  get text() { return this.data['text']; }
  get ts() { return this._options['ts']; }
  get idx() { return this._options['idx']; }
  get markdown() { return this.data['markdown']; }
  get key() { return this.ts + '-' + this.idx; }

  asComponent() {
    switch (this.type) {
      case 'url':
        return this.asURLComponent();
      case 'reply':
        return <span key={ this.key }>{ this.markdown }</span>;
      case 'emoji':
        return this.asEmojiComponent();
      case 'text':
      default:
        return <span key={ this.key }>{ this.text }</span>;
    }
  }

  asURLComponent() {
    let url = this.text.substring(1, this.text.length - 2);
    return (
      <a key={ this.key } href={ url }>
        { url }
        </a>
    );
  }

  asEmojiComponent() {
    let pattern = /!\[(.*?)\]\((.*?)\)/;
    let match = this.markdown.match(pattern);
    if (!match) {
      return <span key={ this.key }>{ this.text }</span>;
    }
    let alt = match[1];
    let imgUrl = match[2];

    return <img
      key={ this.key }
      alt={ alt } src={ imgUrl }
      height="32" width="32"></img>;
  }
}

module.exports = PartialMessage;
