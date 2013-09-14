Issued.ApplicationController = Ember.Controller.extend({
  init: function() {
    this._super();
    var userId = $("body").data("user-id");
    if(userId) this.set('userId', userId);
    $("body").data("user-id", "");
  },
  userId: '',
  userLoggedIn: function() {
    return !!this.get('userId');
  }.property('userId')
})
