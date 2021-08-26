class AddPriceToRolls < ActiveRecord::Migration[5.2]
  def change
    add_column :rolls , :price , :decimal
  end
end
