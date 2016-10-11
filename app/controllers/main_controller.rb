class MainController < ApplicationController
  before_action :fetch_vehicles

  def index
    if view_context.logged_in?
      render 'index'
    else
      render 'anonymous'
    end
  end

  def fetch_vehicles
    session_manager = Session.new(session)
    if session_manager.logged_in?
      @vehicles = session_manager.user.vehicles if session_manager
    else
      @vehicles = []
    end
  end
end
