class UpdateRollBrandAndFormatId < ActiveRecord::Migration[5.2]
  def change
    add_column :rolls , :brand_id , :integer
    add_column :rolls , :format_id, :integer
  end
end
