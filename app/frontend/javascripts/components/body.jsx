const React = require('react');
const Komonjo = require('../komonjo.js');
const ChannelList = require('./channel-list.jsx');
const MessageList = require('./message-list.jsx');
const GenerateButton = require('./generate-button.jsx');
const ScrollableContainer = require('./scrollable-container.jsx');

class Body extends Komonjo.BaseComponent {
  render() {
    return (
      <ScrollableContainer>
        <ChannelList
          selectedChannel={ this.props.selectedChannel }
          channels={ this.props.channels }
        ></ChannelList>
        <span>
          { this.props.selectedChannel && this.props.selectedChannel.name }
        </span>
        <MessageList
          selectedChannel={ this.props.selectedChannel }
          messages={ this.props.messages }
        ></MessageList>
      </ScrollableContainer>
    );
  }
}

module.exports = Body;
