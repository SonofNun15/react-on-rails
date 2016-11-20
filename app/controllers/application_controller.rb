class ApplicationController < ActionController::Base
  helper ReactHelper
  protect_from_forgery with: :exception
end
