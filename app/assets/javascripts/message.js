const Komonjo = require('./komonjo.js');

class Message {
  constructor(data) {
    this._data = data
  }
  get type() { return this.data['type']; }
  get channel() { return this.data['channel']; }
  get text() { return this.data['text']; }
  get ts() { return this.data['ts']; }
  get edited() { return this.data['edited']; }
  get subtype() { return this.data['subtype']; }
  get user() { return this._user || (this._user = new Komonjo.User(this.data['user'])); }
}

module.exports = Message;
