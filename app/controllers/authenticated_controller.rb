class AuthenticatedController < ApplicationController
  before_action :require_authentication

  def require_authentication
    session_manager = Session.new(session)

    redirect_to login_path unless session_manager.logged_in?
  end
end
