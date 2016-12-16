class AuthenticatedController < ApplicationController
  before_action :require_authentication

  def require_authentication
    session_manager = Session.new(session)

    unless session_manager.logged_in?
      render nothing: true, status: 401
    end
  end
end
