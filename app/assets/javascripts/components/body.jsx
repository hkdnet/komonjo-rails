const React = require('react');
const ChannelList = require('./channel-list.jsx');

class Body extends React.Component {
  render() {
    return (
      <section>
        <ChannelList
          selectedChannel={ this.props.selectedChannel }
          channels={ this.props.channels }
        ></ChannelList>
        <span>
          { this.props.selectedChannel && this.props.selectedChannel.name }
        </span>
      </section>
    );
  }
}

module.exports = Body;
