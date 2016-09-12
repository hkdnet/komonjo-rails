const React = require('react');

class Message extends React.Component {
  render() {
    let message = this.props.message;
    return (
      <div>
        <div>
          <img
            src={message.user.profile.image48}
            alt={`${message.user.name}'s icon`}
          />
        </div>
        <div>
          {message.user.name}<br />
          {message.text}
        </div>
      </div>
    );
  }
}

module.exports = Message;
