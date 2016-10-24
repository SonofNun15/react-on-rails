class Fueling < ApplicationRecord
  belongs_to :vehicle

  validates :date, presence: true

  def mpg
    miles / gas
  end

  def above_average_mpg?
    mpg > vehicle.lifetime_mpg
  end

  def below_average_mpg?
    mpg < vehicle.lifetime_mpg
  end
end
