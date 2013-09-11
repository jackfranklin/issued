// for more details see: http://emberjs.com/guides/models/defining-models/

Issued.Issue = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  dueDate: DS.attr('date'),
  user: DS.belongsTo('user'),
  assignee: DS.attr('number'),
  tags: DS.hasMany('tag')
});
