class AddUserIdToAsistencia < ActiveRecord::Migration[5.2]
  def change
    add_reference :asistencia, :user, foreign_key: true
  end
end
