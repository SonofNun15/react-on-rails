require 'Session'
require 'digest'

module ApplicationHelper
  def logged_in?
    session_manager = Session.new(session)
    session_manager.logged_in?
  end

  def current_user
    session_manager = Session.new(session)
    return unless session_manager.logged_in?
    session_manager.user
  end

  def react_user
    return unless logged_in?
    user = current_user
    {
      name: user.name,
      email: user.email,
      gravatarHash: user.gravatar_hash,
    }
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

  def webpack_bundle_tag()
    src =
      if Rails.configuration.webpack[:use_manifest]
        manifest = Rails.configuration.webpack[:asset_manifest]
        filename = manifest["main.js"]

        "#{compute_asset_host}/assets/#{filename}"
      else
        "#{compute_asset_host}/assets/bundle.js"
      end

    javascript_include_tag src
  end
end
