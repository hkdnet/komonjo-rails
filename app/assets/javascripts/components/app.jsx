const React = require('react');
const Header = require('./header.jsx');
const Body = require('./body.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: 'general'
    };
  }
  render() {
    return (
      <div>
        <Header title="komonjo"></Header>
        <Body channel={ this.state.channel }></Body>
      </div>
    );
  }
}

module.exports = App;
