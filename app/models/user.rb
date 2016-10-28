class User < ApplicationRecord
  has_secure_password
  has_many :vehicles

  validates :email, uniqueness: true

  def gravatar_hash
    gravatar_email = email.strip.downcase

    digest = Digest::MD5.new
    digest.update gravatar_email

    digest.hexdigest
  end
end

