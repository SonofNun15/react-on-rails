require 'Session'
require 'digest'

module ApplicationHelper
  def logged_in?
    session_manager = Session.new(session)
    session_manager.logged_in?
  end

  def user_name
    session_manager = Session.new(session)
    return unless session_manager.logged_in?
    session_manager.user.name
  end

  def user_gravatar
    session_manager = Session.new(session)
    return unless session_manager.logged_in?
    email = session_manager.user.email
                                .strip
                                .downcase

    digest = Digest::MD5.new
    digest.update email

    hash = digest.hexdigest

    "https://www.gravatar.com/avatar/#{hash}?s=96&d=identicon"
  end
end
