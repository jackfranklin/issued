Issued.IssueController = Ember.ObjectController.extend({
  allTags: function() {
    return this.get("tags").toArray().map(function(tag) {
      return tag.get("title")
    }).join(", ");
  }.property("tags.@each")
})
