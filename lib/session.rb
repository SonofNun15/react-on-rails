class Session
  def initialize(session)
    @session = session
  end

  def login(user)
    @session[:user_id] = user.id
  end

  def user
    User.find @session[:user_id]
  end

  def logged_in?
    @session.has_key? :user_id
  end

  def logout
    @session.delete :user_id
  end
end
