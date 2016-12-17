class AuthorizeVehicleController < AuthenticatedController
  before_action :authorize, except: [:create, :index]

  def initialize(vehicle_id_param = :id)
    super()
    @vehicle_id_param = vehicle_id_param
  end

  private

  def authorize
    @vehicle = Vehicle.find params[@vehicle_id_param]
    session_manager = Session.new(session)

    unless session_manager.user_id == @vehicle.user.id
      return head :forbidden
    end
  end
end
