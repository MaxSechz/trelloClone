TrelloClone.Views.ListView = Backbone.CompositeView.extend({
  template: JST['lists/list'],
  tagName: 'li',
  className: 'list',
  events: {
    "click .destroy-list": "destroyList"
  },

  initialize: function() {
    this.listenTo(this.model, "sync remove", this.render);
  },

  render: function () {
    var currentView = this;
    var content = this.template({list: this.model});
    this.$el.html(content);
    var currentCard = 0;
    this.model.cards().each(function (card) {
      var cardView = new TrelloClone.Views.CardView({model: card, id: card.get('ord')});
      currentView.addSubview("ul.cards", cardView);
    })
    $("ul.cards.sortable").sortable(
    // {
    //   axis: 'y',
    //   update: function (event, ui) {
    //     var data = $(this).sortable('serialize');
    //     console.log($(event.currentTarget))
    //     console.log(ui)
    //     this.save(data, {
    //       error: function(model, response) {
    //         console.log(response)
    //       }
    //     })
    //   }
    // }
    );
    return this;
  },

  destroyList: function(event) {
    event.preventDefault();
    this.model.destroy();
  }
});
