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
      </section>
    );
  }
}

module.exports = Body;
