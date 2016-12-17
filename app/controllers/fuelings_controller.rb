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
    head :no_content
  end

  private

  def fetch_fueling
    @fueling = Fueling.find params[:id]
  end

  def fueling_params
    params.permit(:date, :gas, :miles, :cost, :description)
  end
end
