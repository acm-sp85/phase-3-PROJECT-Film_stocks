class UpdateUsersV2 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :user_items, :integer
  end
end
