json.array! @vehicles do |vehicle|
  json.partial! 'vehicle', vehicle: vehicle
end
