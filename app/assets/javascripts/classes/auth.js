Issued.Auth = Ember.Object.extend({
  getId: function() {
    return $("body").data("user-id");
  }
});
