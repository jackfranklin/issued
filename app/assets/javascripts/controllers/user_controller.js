Issued.UserController = Ember.ObjectController.extend({
  isEditingEmail: false,
  actions: {
    deleteUser: function() {
      var user = this.get("model");
      user.deleteRecord();
      user.save();
    },
    editEmail: function() {
      this.set('isEditingEmail', true);
    },
    acceptChanges: function() {
      this.set('isEditingEmail', false);
      this.get('model').save();
    }
  }
});
