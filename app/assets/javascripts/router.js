// For more information see: http://emberjs.com/guides/routing/

Issued.Router.map(function() {
  this.resource("users");
  this.route("about");
});


Issued.IndexRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON("/api/test")
  }
});

Issued.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("user");
  }
});
