require 'enumerable'

class Vehicle < ApplicationRecord
  belongs_to :user

  has_many :fuelings
  has_many :maintenance

  def needs_maintenance?
    last_maintenance.nil? ||
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
    if last_maintenance.present?
      fuelings_since_maintenance = fuelings.where 'date > ?', last_maintenance.date
      fuelings_since_maintenance.sum { |f| f.miles }
    end
  end

  def lifetime_mpg
    fuelings.all.to_a.average { |f| f.mpg } if fuelings.any?
  end

  def recent_mpg(num_months)
    if fuelings.any?
      recent_fuelings(num_months).to_a.average { |f| f.mpg }
    end
  end

  def last_maintenance
    maintenance.order(date: :desc).first
  end

  def line_items
    all_items = fuelings + maintenance
    all_items.sort do |first, second|
      second.date <=> first.date
    end
  end

  private

  def recent_fuelings(num_months)
    recent_fuelings = fuelings.where 'date > ?', num_months.months.ago
  end
end
