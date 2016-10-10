class User < ApplicationRecord
  has_secure_password
  has_many :vehicles

  validates :email, uniqueness: true
end

