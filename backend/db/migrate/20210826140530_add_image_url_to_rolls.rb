class AddImageUrlToRolls < ActiveRecord::Migration[5.2]
  def change
    add_column :rolls , :img_url , :string
  end
end
