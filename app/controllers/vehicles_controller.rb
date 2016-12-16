class VehiclesController < AuthorizeVehicleController
  before_action :fetch_vehicles, only: [:index]

  def index
  end

  def create
    session_manager = Session.new(session)

    @new_vehicle = Vehicle.create(vehicle_params)
    @new_vehicle.user = session_manager.user
    @new_vehicle.save
  end

  def update
    @vehicle.update vehicle_params
  end

  def destroy
    @vehicle.destroy
    render nothing: true, status: 204
  end

  private

  def fetch_vehicles
    session_manager = Session.new(session)
    if session_manager.logged_in?
      @vehicles = session_manager.user.vehicles if session_manager
    else
      @vehicles = []
    end
  end

  def vehicle_params
    params.permit(:year, :make, :model, :color, :base_mileage)
  end
end
