Issued.UsersNewController = Ember.Controller.extend({
  actions: {
    newUser: function() {
      var name = this.get('user_name');
      var username = this.get('user_username');
      var email = this.get('user_email');
      var avatar = this.get('user_avatar');
      var password = this.get('user_password');
      var password_confirmation = this.get('user_password_confirmation');
      var user = this.store.createRecord("user", {
        name: name,
        username: username,
        email: email,
        avatar: avatar,
        password: password,
        password_confirmation: password_confirmation
      });

      this.set('user_name', '');
      this.set('user_username', '');
      this.set('user_email', '');
      this.set('user_avatar', '');
      this.set('user_password', '');
      user.save();
    }
  }
});
