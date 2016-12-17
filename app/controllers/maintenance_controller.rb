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
    head :no_content
  end

  private

  def fetch_maintenance
    @maintenance = Maintenance.find params[:id]
  end

  def maintenance_params
    params.require(:maintenance).permit(:date, :description, :mechanic, :cost)
  end
end
