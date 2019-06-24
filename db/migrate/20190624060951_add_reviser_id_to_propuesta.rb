class AddReviserIdToPropuesta < ActiveRecord::Migration[5.2]
  def change
    add_reference :propuesta, :reviser, foreign_key: true
  end
end
