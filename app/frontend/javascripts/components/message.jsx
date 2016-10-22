const React = require('react');
const Komonjo = require('../komonjo.js');
const MessageIcon = require('./message-icon.jsx');
const SelectedBadge = require('./selected-badge.jsx');

class Message extends Komonjo.BaseComponent {
  render() {
    let message = this.props.message;
    return (
      <div
        onClick={ this.onClickHandler.bind(this) }
        >
        <SelectedBadge selected={ message.selected } ></SelectedBadge>
        <MessageIcon
          src={message.user.profile.image48}
          alt={`${message.user.name}'s icon`}
        ></MessageIcon>
        <div>
          {message.user.name}<br />
          { message.partials.map(e => e.asComponent()) }
        </div>
      </div>
    );
  }

  onClickHandler() {
    this.store.toggleSelected(this.props.selectedChannel, this.props.idx);
  }
}

module.exports = Message;
