const React = require('react');

class ChannelList extends React.Component {
  render() {
    return (
      <div>
        { this.props.channel }
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    );
  }
}

module.exports = ChannelList;
