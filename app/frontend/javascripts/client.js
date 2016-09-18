require('whatwg-fetch');
const Komonjo = require('./komonjo.js');

class Client {
  get host() {
    return "http://localhost"
  }
  get baseURL() {
    return "/api";
  }

  fetchChannels() {
    let url = this.baseURL + '/channels';
    return fetch(url)
      .then(res => res.json())
      .then(data => data.map(e => new Komonjo.Channel(e)))
      .catch(ex => console.log('parsing failed', ex));
  }

  fetchMessages(channelName, options) {
    let url = this.baseURL + '/channels/' + channelName + '/messages';
    return fetch(url)
      .then(res => res.json())
      .then(data => data.map(e => new Komonjo.Message(e)))
      .catch(ex => console.log('parsing failed', ex));
  }

  fetchEmojis() {
    if (this._emojis) { return this._emojis; }
    let url = this.baseURL + '/emojis';
    return fetch(url)
      .then(res => res.json())
      .then(data => data.map(e => new Komonjo.Emoji(e)))
      .catch(ex => console.log('parsing failed', ex));
  }
}

module.exports = Client;
