class FuelingsController < AuthorizeVehicleController
  before_action :fetch_fueling, except: [:new, :create]

  def initialize
    super(:vehicle_id)
  end

  def new
    @fueling = Fueling.new
    @fueling.date = Date.today
    @action_text = 'Add'
    @action = vehicle_fuelings_path
    render 'edit'
  end

  def create
    Fueling.create fueling_params.merge(vehicle_id: params[:vehicle_id])

    flash[:notice] = 'Added fueling'
    redirect_to vehicle_path params[:vehicle_id]
  end

  def edit
    @action_text = 'Save'
    @action = vehicle_fueling_path params[:vehicle_id], params[:id]
  end

  def update
    @fueling.update fueling_params
    flash[:notice] = 'Fueling updated'
    redirect_to vehicle_path params[:vehicle_id]
  end

  def destroy
    @fueling.destroy
    flash[:notice] = 'Fueling removed'
    redirect_to vehicle_path params[:vehicle_id]
  end

  private

  def fetch_fueling
    @fueling = Fueling.find params[:id]
  end

  def fueling_params
    params.require(:fueling).permit(:date, :gas, :miles, :cost, :description)
  end
end
