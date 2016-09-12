const React = require('react');
const Komonjo = require('../komonjo.js');

class ChannelList extends Komonjo.BaseComponent {
  render() {
    let options = this.props.channels.map(e => {
      return (
        <option key={e.id} value={ e.id }>{ e.name }</option>
      );
    });
    options.unshift(
        <option key="-">-</option> // default value
    );
    return (
      <select
        defaultValue={ this.props.selectedChannel || '-' }
        onChange={ this.onChangeHandler.bind(this) }
      >
        { options }
      </select>
    );
  }
  onChangeHandler(e) {
    let selectedId = e.target.value;
    let channels = this.props.channels.filter(c => c.id === selectedId);
    if (channels.length != 1) {
      console.log('どういうこったい');
      return false;
    }
    Komonjo.store.onUpdateSelectedChannel(channels[0]);
  }
}

module.exports = ChannelList;
