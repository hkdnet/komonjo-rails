const React = require('react');
const Komonjo = require('../komonjo.js');
const ChannelList = require('./channel-list.jsx');
const MessageList = require('./message-list.jsx');

class Body extends Komonjo.BaseComponent {
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
        <MessageList
          messages={ this.props.messages }
        >
        </MessageList>
      </section>
    );
  }
}

module.exports = Body;
