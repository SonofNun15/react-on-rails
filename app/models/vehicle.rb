require 'enumerable'

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

  def needs_maintenance?
    false
  end

  def last_maintenance
    maintenance.last
  end

  def line_items
    fueling_line_items = fuelings.map { |f| LineItem.from_fueling f }
    maintenance_line_items = maintenance.map { |m| LineItem.from_maintenance m }
    all_items = (fueling_line_items + maintenance_line_items)
    all_items.sort do |first, second|
      second.date <=> first.date
    end
  end
end
