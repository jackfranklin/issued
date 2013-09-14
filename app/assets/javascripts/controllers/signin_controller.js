Issued.SigninController = Ember.Controller.extend({
  needs: ["application"],
  userLoggedIn: function() {
    return this.get('controllers.application').get('userLoggedIn');
  }.property('controllers.application.userId'),
  actions: {
    newAuth: function() {
      var name = this.get('user_name');
      var pass = this.get('user_pass');
      var url = "/users/auth/" + name + "/" + pass;
      var self = this;
      $.getJSON(url, function(data) {
        if(data.success) {
          self.get('controllers.application').set('userId', data.id);
        }
      });
    }
  }
});
