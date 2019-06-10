class AddTelefonoToAdmins < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :telefono, :integer
    add_index :admins, :telefono, unique: true
  end
end
