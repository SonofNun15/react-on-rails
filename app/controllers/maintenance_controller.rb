class MaintenanceController < AuthenticatedController
  def new
    @maintenance = Maintenance.new
    @maintenance.date = Date.today
  end

  def create
    Maintenance.create maintenance_params.merge(vehicle_id: params[:vehicle_id])

    flash[:notice] = 'Added maintenance'
    redirect_to vehicle_path params[:vehicle_id]
  end

  private

  def maintenance_params
    params.require(:maintenance).permit(:date, :description, :mechanic, :cost)
  end
end
