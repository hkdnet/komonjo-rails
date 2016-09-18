const Komonjo = require('./komonjo.js');

class Emoji {
  constructor(data) {
    this._data = data
  }
  get data() { return this._data; }
  get name() { return this.data['name']; }
  get url() { return this.data['url'] || '404'; }
  get isAlias() { return this.data['alias']; }
  get aliasName() { return this.data['alias_name']; }
}

module.exports = Emoji;
