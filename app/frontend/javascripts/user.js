const Komonjo = require('./komonjo.js');

class User {
  constructor(data) {
    this._data = data
  }
  get data() { return this._data; }
  get id() { return this.data['id']; }
  get name() { return this.data['name']; }
  get deleted() { return this.data['deleted']; }
  get color() { return this.data['color']; }
  get isAdmin() { return this.data['is_admin']; }
  get isOwner() { return this.data['is_owner']; }
  get isPrimaryOwner() { return this.data['is_primary_owner']; }
  get isRestricted() { return this.data['is_restricted']; }
  get isUltraRestricted() { return this.data['is_ultra_restricted']; }
  get has2fa() { return this.data['has_2fa']; }
  get hasFiles() { return this.data['has_files']; }
  get profile() { return this._profile || (this._profile = new Komonjo.Profile(this.data['profile'])); }
}

module.exports = User;
