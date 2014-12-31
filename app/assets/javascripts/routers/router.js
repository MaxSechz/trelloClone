TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
    this.collection.fetch()
  },
  routes: {
    '': "boardsIndex",
    "boards/new": "newBoardForm",
    "boards/:id": "boardShow",
    "boards/:id/new": "newListForm"
  },

  boardsIndex: function() {
    var indexView = new TrelloClone.Views.BoardsIndex({collection: this.collection});
    this._swapView(indexView);
  },

  newBoardForm: function() {
    var emptyModel = new TrelloClone.Models.Board();
    var formView = new TrelloClone.Views.BoardForm({
      collection: this.collection,
      model: emptyModel
    });
    this._swapView(formView);
  },

  boardShow: function(id) {
    var targetBoard = new TrelloClone.Models.Board()
    targetBoard.set({id: id})
    targetBoard.fetch()
    var showView = new TrelloClone.Views.BoardShow({model: targetBoard});
    this._swapView(showView);
  },

  newListForm: function(id) {
    var emptyModel = new TrelloClone.Models.List();
    var targetBoard = new TrelloClone.Models.Board();
    targetBoard.set({id: id})
    targetBoard.fetch()
    var formView = new TrelloClone.Views.ListForm({
      model: emptyModel,
      board: targetBoard
    });
    this._swapView(formView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})
