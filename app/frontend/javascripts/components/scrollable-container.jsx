const React = require('react');
const Komonjo = require('../komonjo.js');
const ReactDOM = require('react-dom');

class ScrollableContainer extends Komonjo.BaseComponent {
  componentDidUpdate () {
    switch (this.props.defaultPosition) {
      case 'bottom':
        this.scrollToBottom();
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }

  scrollToBottom() {
    let dom = ReactDOM.findDOMNode(this)
    dom.scrollTop = dom.scrollHeight;
  }
}

module.exports = ScrollableContainer;
