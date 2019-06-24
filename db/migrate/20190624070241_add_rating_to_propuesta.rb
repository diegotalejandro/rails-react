class AddRatingToPropuesta < ActiveRecord::Migration[5.2]
  def change
    add_column :propuesta, :rating, :integer
  end
end
