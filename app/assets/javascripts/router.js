// For more information see: http://emberjs.com/guides/routing/

Issued.Router.map(function() {
  this.resource("users", function() {
    this.route("new");
  });
  this.resource("issues", function() {
    this.route("show", { path: ":id" });
    this.route("new");
  });

  this.resource("tags", function() {
    this.route("show", { path: ":id" });
  });

  this.route("about");

  this.route("signin");

  this.route("logout");
});

Issued.LogoutRoute = Ember.Route.extend({
  setupController: function(controller) {
    this.controllerFor("application").set("userId", "");
  },
  activate: function() {
    var self = this;
    $.getJSON("/users/logout", function() {
      self.transitionTo("index");
    });
  }
});

Issued.SigninRoute = Ember.Route.extend({
  activate: function() {
    if(this.controllerFor("application").get("userLoggedIn")) {
      this.transitionTo("index");
    }
  }
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

Issued.IssuesShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("issue", params.id);
  }
});

Issued.TagsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("tag", params.id);
  }
});

Issued.TagsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("tag");
  }
});

