// for more details see: http://emberjs.com/guides/models/defining-models/

Issued.User = DS.Model.extend({
  name: DS.attr('string'),
  avatar: DS.attr('string'),
  email: DS.attr('string')
});
