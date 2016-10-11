class VehicleController < AuthenticatedController
  def new
    @vehicle = Vehicle.new
  end

  def create
    session_manager = Session.new(session)

    new_vehicle = Vehicle.create(vehicle_params)
    new_vehicle.user = session_manager.user
    new_vehicle.save

    redirect_to root_path
  end

  def show
    @vehicle = Vehicle.find params[:id]
  end

  private

  def vehicle_params
    params.require(:vehicle).permit(:year, :make, :model, :color, :base_mileage)
  end
end
