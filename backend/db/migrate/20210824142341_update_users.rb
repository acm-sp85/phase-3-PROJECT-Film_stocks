class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :user_items, :array
  end
end
