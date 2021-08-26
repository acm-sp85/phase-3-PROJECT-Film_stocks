class UpdateFormatTypeToMedium < ActiveRecord::Migration[5.2]
  def change
    add_column :formats, :medium , :string
    remove_column :formats, :type, :string
  end
end
