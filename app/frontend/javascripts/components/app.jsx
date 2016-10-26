const React = require('react');
const Komonjo = require('../komonjo.js');
const Header = require('./header.jsx');
const Body = require('./body.jsx');
const ModalWall = require('./modal-wall.jsx');
const TextCopyDialog = require('./text-copy-dialog.jsx');

class App extends Komonjo.BaseComponent {
  render() {
    return (
      <div>
        <ModalWall
          visible={ this.state.showModal }>
          <TextCopyDialog
            text={ this.generateText() } ></TextCopyDialog>
        </ModalWall>
        <Header title="komonjo"></Header>
        <Body
          selectedChannel={ this.state.selectedChannel }
          channels={ this.state.channels }
          messages={ this.state.messages }
        ></Body>
      </div>
    );
  }

  extractState(store) {
    return {
      channels: store.channels,
      selectedChannel: store.selectedChannel,
      messages: store.messages,
      showModal: store.showModal,
    };
  }
}

module.exports = App;
