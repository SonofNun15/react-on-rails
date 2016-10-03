class CreateMaintenance < ActiveRecord::Migration[5.0]
  def change
    create_table :maintenance do |t|
      t.date :date
      t.string :description
      t.string :mechanic
      t.decimal :cost

      t.timestamps
    end
  end
end
