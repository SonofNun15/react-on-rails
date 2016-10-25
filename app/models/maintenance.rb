class Maintenance < ApplicationRecord
  belongs_to :vehicle

  def needs_attention?
    return vehicle.last_maintenance == self if vehicle.needs_maintenance?
    false
  end
end
