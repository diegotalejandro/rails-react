class AddTelefonoToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :telefono, :integer
    add_index :users, :telefono, unique: true
  end
end
