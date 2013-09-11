// For more information see: http://emberjs.com/guides/routing/

Issued.Router.map(function() {
  this.resource("users", function() {
    this.route("new");
  });
  this.resource("issues", function() {
  });
  this.route("about");
});


Issued.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("user");
  }
});

Issued.IssuesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("issue");
  }
});

