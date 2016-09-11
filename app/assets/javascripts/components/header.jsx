const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          { this.props.title }
        </h1>
      </header>
    );
  }
}

module.exports = Header;
