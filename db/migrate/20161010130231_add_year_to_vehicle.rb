class AddYearToVehicle < ActiveRecord::Migration[5.0]
  def change
    add_column :vehicles, :year, :integer
  end
end
