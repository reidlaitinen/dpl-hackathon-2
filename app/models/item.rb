class Item < ApplicationRecord
  belongs_to :menu
  belongs_to :cart, optional: true
end
