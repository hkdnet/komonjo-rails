const Komonjo = require('./komonjo.js');
const inflect = require('i')();
const keys = 'channels selectedChannel messages emojis showModal'.split(/\s/);

class Store extends Komonjo.Emitter {
  constructor(dispatcher) { // dispatcherを受け取る
    super();
    this.initializeValues();
    let names = Object.getOwnPropertyNames(this);
    dispatcher.on("updateChannels", this.onUpdateChannels.bind(this));
  }
  initializeValues() {
    this._channels = [];
    this._selectedChannel = undefined;
    this._messages = [];
    this._showModal = false;

    Komonjo.client.fetchChannels()
      .then(channels => this.onUpdateChannels(channels));
    Komonjo.client.fetchEmojis()
      .then(emojis => this.onUpdateEmojis(emojis));
  }

  get isGeneratable() {
    return this.selectedMessages.length != 0;
  }

  get selectedMessages() {
    return this.messages.filter(e => e.selected).sort(e => e.ts);
  }

  onUpdateSelectedChannel(channel) {
    if (this._selectedChannel != channel) {
      Komonjo.client.fetchMessages(channel.name)
        .then(messages => this.onUpdateMessages(messages));
    }
    this._selectedChannel = channel;
    this.emit("CHANGE");
  }
  toggleSelected(channel, idx) {
    let message = this.messages[idx];
    message.selected = !message.selected;
    this.emit("CHANGE");
  }
}

keys.forEach(e => {
  let valueKey = `_${e}`;
  Object.defineProperty(Store.prototype, e, { get: function() { return this[valueKey]; } });
  let updateKey = (function(name) { return "onUpdate" + inflect.camelize(name); })(e);
  if (!Store.prototype[updateKey]) {
    Object.defineProperty(Store.prototype, updateKey, {
      value: function(val) {
        this[valueKey] = val;
        this.emit("CHANGE");
      }
    });
  }
});

module.exports = Store;
