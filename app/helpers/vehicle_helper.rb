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
      },
      lineItems: vehicle.line_items.map { |item| react_line_item item },
    }
  end

  def react_line_item(line_item)
    type = line_item.class.name.downcase
    react_item = {
      type: type,
      key: type + line_item.id.to_s,
      id: line_item.id,
      date: line_item.date,
    }

    type_specific = type_specific_line_item line_item

    react_item.merge type_specific
  end

  def type_specific_line_item(line_item)
    if (line_item.class == Fueling)
      return react_fueling line_item
    elsif (line_item.class == Maintenance)
      return react_maintenance line_item
    else
      {}
    end
  end

  def react_fueling(fueling)
    {
      aboveAverageMpg: fueling.above_average_mpg?,
      mpg: pretty_number(fueling.mpg),
      miles: pretty_number(fueling.miles),
    }
  end

  def react_maintenance(maintenance)
    {
      needsAttention: maintenance.needs_attention?,
      mechanic: maintenance.mechanic,
      description: maintenance.description,
    }
  end
end
