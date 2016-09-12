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

    Komonjo.client.fetchChannels()
      .then(channels => this.onUpdateChannels(channels));
  }
  get channels() {
    return this._channels;
  }
  get selectedChannel() {
    return this._selectedChannel;
  }
  onUpdateChannels(channels) {
    this._channels = channels;
    this.emit("CHANGE");
  }
  onUpdateSelectedChannel(channel) {
    this._selectedChannel = channel;
    this.emit("CHANGE");
  }
}

module.exports = Store;
