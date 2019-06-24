class AddNombreToRevisers < ActiveRecord::Migration[5.2]
  def change
    add_column :revisers, :nombre, :string
    add_index :revisers, :nombre, unique: true
  end
end
