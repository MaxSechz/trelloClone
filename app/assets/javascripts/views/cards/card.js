TrelloClone.Views.CardView = Backbone.View.extend({
  template: JST['cards/card'],
  tagName: 'li',
  className: 'card',

  events: {
    "click .destroy-card": "destroyCard"
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync remove", this.render);
  },

  render: function () {
    var content = this.template({card: this.model});
    this.$el.html(content);
    return this;
  },

  destroyCard: function (event) {
    event.preventDefault();
    this.model.destroy();
  }
});
