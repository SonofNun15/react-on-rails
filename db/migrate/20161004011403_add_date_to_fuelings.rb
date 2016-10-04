class AddDateToFuelings < ActiveRecord::Migration[5.0]
  def change
    add_column :fuelings, :date, :date
  end
end
