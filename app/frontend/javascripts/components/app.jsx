const React = require('react');
const Komonjo = require('../komonjo.js');
const Header = require('./header.jsx');
const Body = require('./body.jsx');

class App extends Komonjo.BaseComponent {
  _render() {
    return (
      <div>
        <Header title="komonjo"></Header>
        <Body
          selectedChannel={ this.state.selectedChannel }
          channels={ this.state.channels }
          messages={ this.state.messages }
        ></Body>
      </div>
    );
  }
  extractState(store) {
    return {
      channels: store.channels,
      selectedChannel: store.selectedChannel,
      messages: store.messages
    };
  }
}

module.exports = App;
