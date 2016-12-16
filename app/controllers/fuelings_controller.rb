class FuelingsController < AuthorizeVehicleController
  before_action :fetch_fueling, except: [:create]

  def initialize
    super(:vehicle_id)
  end

  def create
    @new_fueling = Fueling.create fueling_params.merge(vehicle_id: params[:vehicle_id])
  end

  def update
    @fueling.update fueling_params
  end

  def destroy
    @fueling.destroy
    render nothing: true, status: 204
  end

  private

  def fetch_fueling
    @fueling = Fueling.find params[:id]
  end

  def fueling_params
    params.permit(:date, :gas, :miles, :cost, :description)
  end
end
