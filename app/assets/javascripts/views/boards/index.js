TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  tagName: "ul",
  events: {
    "click .destroy": "destroyBoard"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync remove", this.render);
  },

  render: function() {
    var content = this.template({boards: this.collection})
    this.$el.html(content)
    return this;
  },

  destroyBoard: function(event) {
    event.preventDefault();
    var targetId = $(event.currentTarget).data('id')
    this.collection.get(targetId).destroy();
  }
})
