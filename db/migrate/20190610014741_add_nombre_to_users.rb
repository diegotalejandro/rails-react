class AddNombreToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :nombre, :string
    add_index :users, :nombre, unique: true
  end
end
