const React = require('react');
const Header = require('./header.jsx');
const Body = require('./body.jsx');
const Client = require('../client.js');
const Channel = require('../channel.js');
let client = new Client();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChannel: undefined,
      channels: [ ]
    };
    client.fetchChannels()
      .then(data => data.map(e => new Channel(e)))
      .then(channels => this.setState({ channels }));
  }
  render() {
    return (
      <div>
        <Header title="komonjo"></Header>
        <Body
          selectedChannel={ this.state.selectedChannel }
          channels={ this.state.channels }
        ></Body>
      </div>
    );
  }
}

module.exports = App;
