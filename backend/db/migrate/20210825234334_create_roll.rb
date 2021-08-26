class CreateRoll < ActiveRecord::Migration[5.2]
  def change
    create_table :rolls do |t|
      t.string :name
      t.integer :iso
    end
  end
end
