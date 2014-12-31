TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "api/boards",
  model: TrelloClone.Models.Board,
  getOrFetch: function(id) {
    var targetBoard = new TrelloClone.Models.Board()
    if (!this.get(id)) {
      targetBoard.set({id: id});
      targetBoard.fetch()
      console.log(targetBoard)
    }
    return this.get(id) || targetBoard;
  }
})
