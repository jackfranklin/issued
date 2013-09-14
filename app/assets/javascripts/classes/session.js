Issued.Session = Ember.Object.extend({
  userLoggedIn: function() {
    return !!this.get('userId')
  }.property('userId'),
  init: function() {
    this._super();
    var userId = $("body").data("user-id");
    if(userId) {
      this.set('userId', userId);
    }
    var userName = $("body").data("user-name");
    if(userName) this.set('userName', userName);
    $("body").data("user-id", "");
    $("body").data("user-name", "");
  }
});
