Issued.ApplicationController = Ember.Controller.extend({
  init: function() {
    this._super();
    var userId = $("body").data("user-id");
    if(userId) {
      this.set('userId', userId);
      var self = this;
      this.store.find("user", userId).then(function(user) {
        self.set("userName", user.get("name"));
      });
    }
    $("body").data("user-id", "");
  },
  userName: '',
  userId: '',
  userLoggedIn: function() {
    return !!this.get('userId');
  }.property('userId')
})
