require('whatwg-fetch');
const Channel = require('./channel.js');

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
      .then(data => data.map(e => new Channel(e)))
      .catch(ex => console.log('parsing failed', ex));
  }
}

module.exports = Client;
