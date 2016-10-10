class AddPasswordDigestToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :password_digest, :string
    add_column :users, :salt, :string
  end
end
