const React = require('react');
const Header = require('./header.jsx');
const Body = require('./body.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChannel: undefined,
      channels: [
        { id: '1', name: 'general' },
        { id: '2', name: 'random' },
        { id: '3', name: 'times_hkdnet' }
      ]
    };
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
