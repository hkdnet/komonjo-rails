const React = require('react');

class ChannelList extends React.Component {
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
      <select defaultValue={ this.props.selectedChannel || '-' }>
        { options }
      </select>
    );
  }
}

module.exports = ChannelList;
