const React = require('react');
const ReactDOM = require('react-dom');
const Komonjo = require('../komonjo.js');

class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    if (this.extractState) {
      this.state = this.extractState(this.store);
      this.store.on("CHANGE", () => {
        this.setState(this.extractState(this.store));
      });
    }
  }

  componentDidMount() {
    let t = ReactDOM.findDOMNode(this)
    t.classList.add(this.constructor.name);
  }

  get store() {
    return Komonjo.store;
  }

  _onChange() {
  }
}

module.exports = BaseComponent;
