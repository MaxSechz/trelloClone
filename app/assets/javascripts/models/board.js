TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',

  parse: function(response) {
    if (response.lists) {
      this.lists().set(response.lists, {parse: true});
      delete response.lists;
    }
    return response;
  },

  lists: function() {
    this._lists = this._lists || new TrelloClone.Collections.Lists()
    return this._lists;
  }
})
