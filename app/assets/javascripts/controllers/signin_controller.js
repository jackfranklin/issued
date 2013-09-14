Issued.SigninController = Ember.Controller.extend({
  actions: {
    newAuth: function() {
      console.log("hello world");
      var name = this.get('user_name');
      var pass = this.get('user_pass');
      var url = "/users/auth/" + name + "/" + pass;
      var self = this;
      $.getJSON(url, function(data) {
        if(data.success) {
          self.get('session').set('userId', data.id);
          self.get('session').set('userName', data.name);
          self.set('user_name', '');
          self.set('user_pass', '');
        }
      });
    }
  }
});
