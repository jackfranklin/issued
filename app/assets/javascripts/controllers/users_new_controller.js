Issued.UsersNewController = Ember.Controller.extend({
  actions: {
    newUser: function() {
      var name = this.get('user_name');
      var email = this.get('user_email');
      var avatar = this.get('user_avatar');
      var user = this.store.createRecord("user", {
        name: name,
        email: email,
        avatar: avatar
      });

      this.set('user_name', '');
      this.set('user_email', '');
      this.set('user_avatar', '');
      user.save();
    }
  }
});
