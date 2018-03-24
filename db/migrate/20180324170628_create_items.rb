class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.float :price
      t.string :category
      t.text :description
      t.belongs_to :menu, foreign_key: true
      t.belongs_to :cart, optional: true

      t.timestamps
    end
  end
end
