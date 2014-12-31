# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.(@board, :id, :title, :created_at, :updated_at)

json.lists @board.lists do |list|
  json.(list, :id, :title, :ord, :board_id)
  json.cards list.cards do |card|
    json.(card, :id, :title, :list_id, :ord, :description)
  end
end
