class Propuestum < ApplicationRecord
  def blank_stars
   5 - rating.to_i
  end
  belongs_to :user

end
