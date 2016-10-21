class Fueling < ApplicationRecord
  belongs_to :vehicle

  validates :date, presence: true

  def mpg
    0
  end

  def above_average_mpg?
    false
  end

  def below_average_mpg?
    true
  end
end
