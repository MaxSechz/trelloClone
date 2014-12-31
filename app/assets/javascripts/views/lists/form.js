TrelloClone.Views.ListForm = Backbone.View.extend({
  tagName: "form",
  className: "new-list",
  template: JST['lists/new_list'],
  events: {
    "submit": "submitForm"
  },

  initialize: function(options) {
    this.board = options.board;
  },

  render: function() {
    var content = this.template({list: this.model});
    this.$el.html(content);
    return this;
  },

  submitForm: function(event) {
    var currentView = this;
    event.preventDefault();
    var $target = $(event.currentTarget);
    var json = $target.serializeJSON().list;
    json.board_id = this.board.id;
    json.ord = this.board.lists().length;
    this.board.lists().create( json, {
      success: function(model) {
        Backbone.history.navigate("boards/" + model.get("board_id"), {trigger: true})
      },
      error: function(model, response) {
        currentView.board.lists().remove(model);
        var errors = response.responseJSON;
        currentView.$("span.error").text(errors.title);
      }
    });
  }
})
