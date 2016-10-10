class RemoveSaltFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :salt, :string
  end
end
