class AddVehicleIdToFuelings < ActiveRecord::Migration[5.0]
  def change
    add_column :fuelings, :vehicle_id, :integer
  end
end
