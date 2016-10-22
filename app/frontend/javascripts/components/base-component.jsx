const React = require('react');
const ReactDOM = require('react-dom');
const Komonjo = require('../komonjo.js');
const inflect = require('i')();

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
    t.classList.add(this.componentClassName);
  }

  get store() {
    return Komonjo.store;
  }

  get componentClassName() {
    if (this._componentClassName) {
      return this._componentClassName;
    }
    let u = inflect.underscore(this.constructor.name);
    return this._componentClassName = inflect.dasherize(u);
  }
}

module.exports = BaseComponent;
