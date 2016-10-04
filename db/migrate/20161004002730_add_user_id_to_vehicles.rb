class AddUserIdToVehicles < ActiveRecord::Migration[5.0]
  def change
    add_column :vehicles, :user_id, :integer
  end
end
