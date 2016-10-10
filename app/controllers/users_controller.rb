require 'Session'

class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    inputs = user_params
    new_user = User.create(inputs)

    if new_user.created_at
      session_manager = Session.new(session)
      session_manager.login new_user
    end

    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end
end
