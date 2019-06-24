class AddAprobacionToPropuesta < ActiveRecord::Migration[5.2]
  def change
    add_column :propuesta, :aprobacion, :string
  end
end
