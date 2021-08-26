class AddDescriptionToRolls < ActiveRecord::Migration[5.2]
  def change
    add_column :rolls , :description , :string
  end
end
