class MaintenanceController < AuthorizeVehicleController
  before_action :fetch_maintenance, except: [:new, :create]

  def initialize
    super(:vehicle_id)
  end

  def new
    @maintenance = Maintenance.new
    @maintenance.date = Date.today
    @action_text = 'Add'
    @action = vehicle_maintenance_index_path
    render 'edit'
  end

  def create
    Maintenance.create maintenance_params.merge(vehicle_id: params[:vehicle_id])

    flash[:notice] = 'Added maintenance'
    redirect_to vehicle_path params[:vehicle_id]
  end

  def edit
    @action_text = 'Save'
    @action = vehicle_maintenance_path params[:vehicle_id], params[:id]
  end

  def update
    @maintenance.update maintenance_params
    flash[:notice] = 'Maintenance updated'
    redirect_to vehicle_path params[:vehicle_id]
  end

  def destroy
    @maintenance.destroy
    flash[:notice] = 'Maintenance removed'
    redirect_to vehicle_path params[:vehicle_id]
  end

  private

  def fetch_maintenance
    @maintenance = Maintenance.find params[:id]
  end

  def maintenance_params
    params.require(:maintenance).permit(:date, :description, :mechanic, :cost)
  end
end
