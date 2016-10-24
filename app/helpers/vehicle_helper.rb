module VehicleHelper
  def pretty_number(num)
    number_with_precision num,
                          delimiter: ',',
                          precision: 2,
                          strip_insignificant_zeros: true
  end
end

class NumberFormatter
  extend ActionView::Helpers::NumberHelper
  extend VehicleHelper
end
