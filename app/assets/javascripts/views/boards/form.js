TrelloClone.Views.BoardForm = Backbone.View.extend({
  tagName: "form",
  className: "new-board",
  template: JST['boards/new_board'],
  events: {
    "submit": "submitForm"
  },

  render: function() {
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },

  submitForm: function(event) {
    var currentView = this;
    event.preventDefault();
    var $target = $(event.currentTarget);
    var json = $target.serializeJSON().board;
    this.collection.create( json, {
      success: function(model) {
        Backbone.history.navigate("boards/" + model.id, {trigger: true})
      },
      error: function(model, response) {
        currentView.collection.remove(model);
        var errors = response.responseJSON;
        currentView.$("span.error").text(errors.title);
      }
    });
  }
})
