class VehiclesController < AuthorizeVehicleController
  def new
    @vehicle = Vehicle.new
    @action_text = 'Create'
    @action = vehicles_path
    render 'edit'
  end

  def create
    session_manager = Session.new(session)

    new_vehicle = Vehicle.create(vehicle_params)
    new_vehicle.user = session_manager.user
    new_vehicle.save

    redirect_to root_path
  end

  def show
  end

  def edit
    @action_text = 'Save'
    @action = vehicle_path params[:id]
  end

  def update
    @vehicle.update vehicle_params
    flash[:notice] = 'Vehicle updated'
    redirect_to vehicle_path(params[:id])
  end

  def destroy
    @vehicle.destroy
    flash[:notice] = 'Vehicle removed'
    redirect_to root_path
  end

  private

  def vehicle_params
    params.require(:vehicle).permit(:year, :make, :model, :color, :base_mileage)
  end
end
