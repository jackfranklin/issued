Issued.EditUserEmailView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
})
Ember.Handlebars.helper('edit-user-email', Issued.EditUserEmailView);
