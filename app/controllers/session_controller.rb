class SessionController < ApplicationController
  def new
  end

  def create
    parameters = login_params
    user = User.find_by email: parameters[:email]

    if user.blank? or !user.authenticate parameters[:password]
      flash[:alert] = 'Login failed'
      return redirect_to login_path
    end

    session_manager = Session.new(session)
    session_manager.login user
    redirect_to root_path
  end

  def destroy
    session_manager = Session.new(session)
    session_manager.logout
    redirect_to root_path
  end

  private

  def login_params()
    params.permit(:email, :password)
  end
end
