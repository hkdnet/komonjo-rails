const Komonjo = require('./komonjo.js');

class Profile {
  constructor(data) {
    this._data = data
  }
  get first_name() { return this.data['first_name']; }
  get last_name() { return this.data['last_name']; }
  get real_name() { return this.data['real_name']; }
  get email() { return this.data['email']; }
  get skype() { return this.data['skype']; }
  get phone() { return this.data['phone']; }
  get image_24() { return this.data['image_24']; }
  get image_32() { return this.data['image_32']; }
  get image_48() { return this.data['image_48']; }
  get image_72() { return this.data['image_72']; }
  get image_192() { return this.data['image_192']; }
}

module.exports = Profile;
