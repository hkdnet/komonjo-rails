const React = require('react');
const Komonjo = require('../komonjo.js');

class ScrollableContainer extends Komonjo.BaseComponent {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

module.exports = ScrollableContainer;
