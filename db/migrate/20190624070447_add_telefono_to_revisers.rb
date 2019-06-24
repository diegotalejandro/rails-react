class AddTelefonoToRevisers < ActiveRecord::Migration[5.2]
  def change
    add_column :revisers, :telefono, :integer
    add_index :revisers, :telefono, unique: true
  end
end
