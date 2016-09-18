const Komonjo = require('./komonjo.js');

class Store extends Komonjo.Emitter {
  constructor(dispatcher) { // dispatcherを受け取る
    super();
    this.initializeValues();
    dispatcher.on("updateChannels", this.onUpdateChannels.bind(this));
  }
  initializeValues() {
    this._channels = [];
    this._selectedChannel = undefined;
    this._messages = [];

    Komonjo.client.fetchChannels()
      .then(channels => this.onUpdateChannels(channels));
  }
  get channels() {
    return this._channels;
  }
  get selectedChannel() {
    return this._selectedChannel;
  }
  get messages() {
    return this._messages;
  }
  onUpdateChannels(channels) {
    this._channels = channels;
    this.emit("CHANGE");
  }
  onUpdateSelectedChannel(channel) {
    if (this._selectedChannel != channel) {
      Komonjo.client.fetchMessages(channel.name)
        .then(messages => this.onUpdateMessages(messages));
    }
    this._selectedChannel = channel;
    this.emit("CHANGE");
  }
  onUpdateMessages(messages) {
    this._messages = messages;
    this.emit("CHANGE");
  }
}

module.exports = Store;
