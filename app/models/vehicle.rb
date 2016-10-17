class Vehicle < ApplicationRecord
  belongs_to :user

  has_many :fuelings
  has_many :maintenance

  def needs_maintenance?
    true
  end

  def lifetime_mileage
    base_mileage
  end

  def recent_mileage(months)
    months
  end

  def miles_since_maintenance
    0
  end

  def lifetime_mpg
    0
  end

  def recent_mpg(months)
    months
  end
end
