Issued.IssuesNewController = Ember.Controller.extend({
  actions: {
    newIssue: function() {
      var title = this.get("title");
      var desc = this.get("description");
      var assignee = this.get("assignee_id");
      var issue = this.store.createRecord("issue", {
        title: title,
        description: desc,
        assignee: assignee
      });
      this.store.find("tag", 1).then(function(t) {
        issue.get("tags").addObject(t);
        issue.save();
        this.set("title", "");
        this.set("description", "");
        this.set("assignee_id", "");
      });
    }
  }
});
