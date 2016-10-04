class Vehicle < ApplicationRecord
  belongs_to :user

  has_many :fuelings
  has_many :maintenance
end
