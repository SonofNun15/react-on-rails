json.id vehicle.id
json.year vehicle.year
json.make vehicle.make
json.model vehicle.model
json.color vehicle.color
json.baseMileage vehicle.base_mileage
json.fuelings do
  json.array! vehicle.fuelings do |fueling|
    json.partial! 'fueling', fueling: fueling
  end
end
json.maintenance do
  json.array! vehicle.maintenance do |maintenance|
    json.partial! 'maintenance', maintenance: maintenance
  end
end
