class VehicleController < AuthenticatedController
  def new
    @vehicle = Vehicle.new
    @action_text = 'Create'
    @action = vehicle_path
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
    @vehicle = Vehicle.find params[:id]
  end

  def edit
    @vehicle = Vehicle.find params[:id]
    @action_text = 'Save'
    @action = update_vehicle_path
  end

  def update
    id = params[:id]
    vehicle = Vehicle.find id
    vehicle.update vehicle_params

    flash[:notice] = 'Vehicle updated'
    redirect_to show_vehicle_path(id)
  end

  def destroy
    vehicle = Vehicle.find params[:id]
    vehicle.destroy

    redirect_to root_path
  end

  private

  def vehicle_params
    params.require(:vehicle).permit(:year, :make, :model, :color, :base_mileage)
  end
end
