module Enumerable
  def average(&block)
    (sum &block) / size
  end
end
