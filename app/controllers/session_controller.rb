class SessionController < ApplicationController
  def create
    parameters = login_params
    user = User.find_by email: parameters[:email]

    if user.blank? or !user.authenticate parameters[:password]
      return head :unauthorized
    end

    session_manager = Session.new(session)
    session_manager.login user
    @profile = user
  end

  def destroy
    session_manager = Session.new(session)
    session_manager.logout

    head :no_content
  end

  private

  def login_params()
    params.permit(:email, :password)
  end
end
