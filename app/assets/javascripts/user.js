const Komonjo = require('./komonjo.js');

class User {
  constructor(data) {
    this._data = data
  }
  get id() { return this.data['id']; }
  get name() { return this.data['name']; }
  get deleted() { return this.data['deleted']; }
  get color() { return this.data['color']; }
  get is_admin() { return this.data['is_admin']; }
  get is_owner() { return this.data['is_owner']; }
  get is_primary_owner() { return this.data['is_primary_owner']; }
  get is_restricted() { return this.data['is_restricted']; }
  get is_ultra_restricted() { return this.data['is_ultra_restricted']; }
  get has_2fa() { return this.data['has_2fa']; }
  get has_files() { return this.data['has_files']; }
  get profile() { return this._profile || (this._profile = new Komonjo.Profile(data['profile'])); }
}

module.exports = User;
