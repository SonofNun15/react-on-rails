class CreateVehicles < ActiveRecord::Migration[5.0]
  def change
    create_table :vehicles do |t|
      t.string :make
      t.string :model
      t.string :description
      t.integer :base_mileage

      t.timestamps
    end
  end
end
