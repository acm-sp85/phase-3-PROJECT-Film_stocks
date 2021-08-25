class DeleteUserItemsColum < ActiveRecord::Migration[5.2]
  def change
    remove_column :users , :user_items , :integer
  end
end
