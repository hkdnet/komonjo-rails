const React = require('react');
const Komonjo = require('../komonjo.js');
const ChannelList = require('./channel-list.jsx');
const MessageList = require('./message-list.jsx');

class Body extends Komonjo.BaseComponent {
  render() {
    return (
      <div>
        <ChannelList
          selectedChannel={ this.props.selectedChannel }
          channels={ this.props.channels } />
        <span>
          { this.props.selectedChannel && this.props.selectedChannel.name }
        </span>
        <MessageList
          selectedChannel={ this.props.selectedChannel }
          messages={ this.props.messages } />
      </div>
    );
  }
}

module.exports = Body;
