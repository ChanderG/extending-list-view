export default Ember.Route.extend({
  model: function() {
    var items = [];
    for(var i=0; i< 100; i++){
      items.push({id  :  i,
                  name: "Lorem"});
    }
    return items;
  }
});
