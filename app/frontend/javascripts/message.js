const Komonjo = require('./komonjo.js');
const marked = require('marked');

class Message {
  constructor(data) {
    this._data = data
  }
  get data() { return this._data || {}; }
  get type() { return this.data['type']; }
  get channel() { return this.data['channel']; }
  get text() { return this.data['text']; }
  get ts() { return this.data['ts']; }
  get edited() { return this.data['edited']; }
  get subtype() { return this.data['subtype']; }
  get meta() { return this.data['meta'] || {}; }
  get user() { return this._user || (this._user = new Komonjo.User(this.data['user'])); }
  get markdown() { return this.data['markdown']; }
  get partials() {
    if (this._partials) return this._partials;
    this._partials = this.data['partials'].map((e, i) => {
      return new Komonjo.PartialMessage(e, { ts: this.ts, idx: i });
    });
    return this._partials;
  }
  get html() { return this._html || (this._html = marked(this.markdown)); }
}

module.exports = Message;
