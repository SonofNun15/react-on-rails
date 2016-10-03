class CreateFuelings < ActiveRecord::Migration[5.0]
  def change
    create_table :fuelings do |t|
      t.decimal :gas
      t.decimal :miles
      t.decimal :cost
      t.string :description

      t.timestamps
    end
  end
end
