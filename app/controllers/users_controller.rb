require 'Session'

class UsersController < ApplicationController
  def get
    session_manager = Session.new(session)

    unless session_manager.logged_in?
      return render nothing: true, status: 401
    end

    @profile = session_manager.user
  end

  def create
    inputs = register_params
    @new_user = User.create(inputs)

    if @new_user.invalid?
      return render json: @new_user.errors.details, status: 422
    end

    session_manager = Session.new(session)
    session_manager.login @new_user
  end

  def update
    update_params = profile_params
    session_manager = Session.new(session)
    unless session_manager.logged_in?
      return render nothing: true, status: 401
    end

    @updated_user = session_manager.user
    @updated_user.update update_params
  end

  def update_password
    update_params = password_params
    session_manager = Session.new(session)
    unless session_manager.logged_in?
      return render nothing: true, status: 401
    end

    @updated_user = session_manager.user
    @updated_user.update update_params
    return render nothing: true, status: 204
  end

  private

  def register_params
    params.permit(:email, :name, :password, :password_confirmation)
  end

  def profile_params
    params.permit(:email, :name)
  end

  def password_params
    params.permit(:password, :password_confirmation)
  end
end
