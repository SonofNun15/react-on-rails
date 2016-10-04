class AddVehicleIdToMaintenance < ActiveRecord::Migration[5.0]
  def change
    add_column :maintenance, :vehicle_id, :integer
  end
end
