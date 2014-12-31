TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST['boards/show'],

  render: function() {
    var currentView = this;
    var content = this.template({board: this.model});
    this.$el.html(content);
    this.model.lists().each(function (list) {
      var listView = new TrelloClone.Views.ListView({model: list});
      currentView.addSubview("ul.lists", listView);
    })
    $("ul.lists.sortable").sortable();
    return this;
  }
})
