const React = require('react');
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

  render() {
    this.preRender();
    let elm = this._render();
    return this.postRender(elm);
  }

  preRender() {
  }

  postRender(elm) {
    return elm;
  }

  get store() {
    return Komonjo.store;
  }

  _onChange() {
  }
}

module.exports = BaseComponent;
