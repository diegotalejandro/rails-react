class CreatePropuesta < ActiveRecord::Migration[5.2]
  def change
    create_table :propuesta do |t|
      t.string :nombre
      t.string :titulo
      t.string :correo
      t.string :organizacion
      t.string :resumen
      t.string :attachment

      t.timestamps
    end
  end
end
