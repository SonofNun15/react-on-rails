class MaintenanceController < AuthorizeVehicleController
  before_action :fetch_maintenance, except: [:create]

  def initialize
    super(:vehicle_id)
  end

  def create
    @new_maintenance = Maintenance.create maintenance_params.merge(vehicle_id: params[:vehicle_id])
  end

  def update
    @maintenance.update maintenance_params
  end

  def destroy
    @maintenance.destroy
    render nothing: true, status: 204
  end

  private

  def fetch_maintenance
    @maintenance = Maintenance.find params[:id]
  end

  def maintenance_params
    params.require(:maintenance).permit(:date, :description, :mechanic, :cost)
  end
end
