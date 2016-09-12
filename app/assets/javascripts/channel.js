class Channel {
  constructor(data) {
    this._data = data;
  }
  get data() { return this._data; }
  get id() { return this.data['id']; }
  get name() { return this.data['name']; }
  get isChannel() { return this.data['is_channel']; }
  get created() { return this.data['created']; }
  get creator() { return this.data['creator']; }
  get isArchived() { return this.data['is_archived']; }
  get isGeneral() { return this.data['is_general']; }
  get members() { return this.data['members']; }
  get topic() { return this.data['topic']; }
  get purpose() { return this.data['purpose']; }
  get isMember() { return this.data['is_member']; }
  get lastRead() { return this.data['last_read']; }
  get latest() { return this.data['latest']; }
  get unreadCount() { return this.data['unread_count']; }
  get unreadCountDisplay() { return this.data['unread_count_display']; }
}

module.exports = Channel;
