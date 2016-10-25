class AuthorizeVehicleController < AuthenticatedController
  before_action :authorize, except: [:new, :create]

  def initialize(vehicle_id_param = :id)
    super()
    @vehicle_id_param = vehicle_id_param
  end

  private

  def authorize
    @vehicle = Vehicle.find params[@vehicle_id_param]
    session_manager = Session.new(session)
    redirect_to login_path unless session_manager.user_id == @vehicle.user.id
  end
end
