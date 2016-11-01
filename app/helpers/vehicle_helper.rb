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
    }
  end
end
