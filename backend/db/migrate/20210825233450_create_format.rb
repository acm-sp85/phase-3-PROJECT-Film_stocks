class CreateFormat < ActiveRecord::Migration[5.2]
  def change
    create_table :formats do |t|
      t.string :type
    end
  end
end

