const Komonjo = require('./komonjo.js');

class Profile {
  constructor(data) {
    this._data = data
  }
  get data() { return this._data; }
  get firstName() { return this.data['first_name']; }
  get lastName() { return this.data['last_name']; }
  get realName() { return this.data['real_name']; }
  get email() { return this.data['email']; }
  get skype() { return this.data['skype']; }
  get phone() { return this.data['phone']; }
  get image24() { return this.data['image_24']; }
  get image32() { return this.data['image_32']; }
  get image48() { return this.data['image_48']; }
  get image72() { return this.data['image_72']; }
  get image192() { return this.data['image_192']; }
}

module.exports = Profile;
