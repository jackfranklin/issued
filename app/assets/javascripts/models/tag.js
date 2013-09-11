Issued.Tag = DS.Model.extend({
  title: DS.attr('string'),
  issues: DS.hasMany('issue')
});
