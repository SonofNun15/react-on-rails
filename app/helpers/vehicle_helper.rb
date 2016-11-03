module VehicleHelper
  def pretty_number(num)
    number_with_precision num,
                          delimiter: ',',
                          precision: 2,
                          strip_insignificant_zeros: true
  end

  def react_vehicle(vehicle)
    {
      id: vehicle.id,
      needsMaintenance: vehicle.needs_maintenance?,
      year: vehicle.year,
      make: vehicle.make,
      model: vehicle.model,
      mpg: {
        lifetime: pretty_number(vehicle.lifetime_mpg),
        recent: pretty_number(vehicle.recent_mpg(6.months)),
      },
      mileage: {
        lifetime: pretty_number(vehicle.lifetime_mileage),
        recent: pretty_number(vehicle.recent_mileage(6.months)),
        sinceMaintenance: pretty_number(vehicle.miles_since_maintenance),
      }
    }
  end
end
