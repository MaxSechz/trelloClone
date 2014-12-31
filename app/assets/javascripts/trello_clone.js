window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new TrelloClone.Routers.Router({$rootEl: $("div#main")})
    Backbone.history.start();
  }
};
