class ChangeDescriptionToColorInVehicle < ActiveRecord::Migration[5.0]
  def change
    remove_column :vehicles, :description, :string
    add_column :vehicles, :color, :string
  end
end
