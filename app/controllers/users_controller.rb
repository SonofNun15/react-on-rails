require 'Session'

class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    inputs = register_params
    new_user = User.create(inputs)

    if new_user.created_at
      session_manager = Session.new(session)
      session_manager.login new_user
    end

    redirect_to root_path
  end

  def edit
    session_manager = Session.new(session)
    return redirect_to login_path if !session_manager.logged_in?
    @user = User.find session_manager.user_id
  end

  def update
    update_user profile_params
    flash[:notice] = 'Profile updated'
  end

  def edit_password
  end

  def update_password
    update_user password_params
    flash[:notice] = 'Password updated'
  end

  def update_user(update_params)
    session_manager = Session.new(session)
    return redirect_to login_path if !session_manager.logged_in?

    session_manager.user.update update_params
    redirect_to root_path
  end

  private

  def register_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end

  def profile_params
    params.require(:user).permit(:email, :name)
  end

  def password_params
    params.permit(:password, :password_confirmation)
  end
end
