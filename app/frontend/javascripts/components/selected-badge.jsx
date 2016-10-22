const React = require('react');
const Komonjo = require('../komonjo.js');

class SelectedBadge extends Komonjo.BaseComponent {
  render() {
    return (
      <i className={ this.props.selected && "fa fa-check"}></i>
    );
  }
}

module.exports = SelectedBadge;
