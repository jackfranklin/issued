Issued.UserController = Ember.ObjectController.extend({
  actions: {
    deleteUser: function() {
      var user = this.get("model");
      user.deleteRecord();
      user.save();
    }
  }
});
