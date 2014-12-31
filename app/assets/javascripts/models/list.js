TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: 'api/lists',

  parse: function (response) {
    if (response.cards) {
      this.cards().set(response.cards);
      delete response.cards;
    }
    return response;
  },

  cards: function () {
    this._cards = this._cards || new TrelloClone.Collections.Cards();
    return this._cards;
  }
})
