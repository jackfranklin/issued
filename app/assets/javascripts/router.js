// For more information see: http://emberjs.com/guides/routing/

Issued.Router.map(function() {
  this.resource("users", function() {
    this.route("new");
  });
  this.route("about");
});


Issued.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("user");
  }
});
