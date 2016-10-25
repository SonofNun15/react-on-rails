module VehicleHelper
  def pretty_number(num)
    number_with_precision num,
                          delimiter: ',',
                          precision: 2,
                          strip_insignificant_zeros: true
  end

  def line_item_edit_path(line_item)
    if line_item.type == :fueling
      return edit_vehicle_fueling_path line_item.vehicle.id, line_item.id
    end

    if line_item.type == :maintenance
      return edit_vehicle_maintenance_path line_item.vehicle.id, line_item.id
    end
  end

  def line_item_delete_path(line_item)
    if line_item.type == :fueling
      return vehicle_fueling_path line_item.vehicle.id, line_item.id
    end

    if line_item.type == :maintenance
      return vehicle_maintenance_path line_item.vehicle.id, line_item.id
    end
  end
end

class NumberFormatter
  extend ActionView::Helpers::NumberHelper
  extend VehicleHelper
end
