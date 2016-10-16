const Komonjo = require('./komonjo.js');
const React = require('react');

class PartialMessage {
  constructor(data) {
    this._data = data
  }
  get data() { return this._data || {}; }
  get type() { return this.data['type']; }
  get text() { return this.data['text']; }
  get markdown() { return this.data['markdown']; }

  asComponent(key) {
    switch (this.type) {
      case 'url':
        let url = this.text.substring(1, this.text.length - 2);
        return (
          <a key={ key } href={ url }>
            { url }
          </a>
        );
      case 'reply':
        return <span key={ key }>{ this.markdown }</span>;
      case 'emoji':
        let pattern = /\[(.*?)\]\(.*?\)/;
        let match = this.markdown.match(pattern);
        if (!match) {
          return <span key={ this.emojiKey(this.text) }>{ this.text }</span>;
        }
        let alt = match[1];
        let imgUrl = match[2];

        return <img key={ this.emojiKey(alt) } alt={ alt } src={ imgUrl }></img>;
      case 'text':
      default:
        return <span key={ key }>{ this.text }</span>;
    }
  }

  emojiKey(emoji) {
    let counter = this.constructor.counter;
    counter[emoji] = counter[emoji] || 0;
    counter[emoji] += 1;
    return emoji + counter[emoji];
  }
  static get counter() {
    return this._counter || (this._counter = []);
  }
}

module.exports = PartialMessage;
