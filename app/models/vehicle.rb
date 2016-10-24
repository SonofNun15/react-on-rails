require 'enumerable'

class Vehicle < ApplicationRecord
  belongs_to :user

  has_many :fuelings
  has_many :maintenance

  def needs_maintenance?
    last_maintenance.date < 6.months.ago ||
      miles_since_maintenance > 4000
  end

  def lifetime_mileage
    computed_miles = fuelings.all.sum { |f| f.miles }
    base_mileage + computed_miles
  end

  def recent_mileage(num_months)
    recent_fuelings(num_months).sum { |f| f.miles }
  end

  def miles_since_maintenance
    fuelings_since_maintenance = fuelings.where 'date > ?', last_maintenance.date
    fuelings_since_maintenance.sum { |f| f.miles }
  end

  def lifetime_mpg
    fuelings.all.to_a.average { |f| f.mpg }
  end

  def recent_mpg(num_months)
    recent_fuelings(num_months).to_a.average { |f| f.mpg }
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

  private

  def recent_fuelings(num_months)
    recent_fuelings = fuelings.where 'date > ?', num_months.months.ago
  end
end
