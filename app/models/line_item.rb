class LineItem
  attr_reader :id, :vehicle, :change, :title,
              :description, :date, :type

  def initialize(**properties)
    @id = properties[:id]
    @vehicle = properties[:vehicle]
    @change = properties[:change]
    @title = properties[:title]
    @description = properties[:description]
    @date = properties[:date]
    @type = properties[:type]
    @attention = properties[:attention]
  end

  def needs_attention?
    @attention
  end

  def self.from_fueling(fueling)
    new id: fueling.id,
        vehicle: fueling.vehicle,
        change: fueling_change(fueling),
        title: "#{NumberFormatter.pretty_number fueling.mpg} MPG",
        description: "#{NumberFormatter.pretty_number fueling.miles} miles",
        date: fueling.date,
        type: :fueling
  end

  def self.from_maintenance(maintenance)
    new id: maintenance.id,
        vehicle: maintenance.vehicle,
        title: maintenance.mechanic,
        description: maintenance.description,
        date: maintenance.date,
        type: :maintenance,
        attention: maintenance_needs_attention?(maintenance)
  end

  private

  def self.fueling_change(fueling)
    return :increase if fueling.above_average_mpg?
    return :decrease if fueling.below_average_mpg?
  end

  def self.maintenance_needs_attention?(maintenance)
    vehicle = maintenance.vehicle
    return vehicle.last_maintenance == maintenance if vehicle.needs_maintenance?
    false
  end
end
