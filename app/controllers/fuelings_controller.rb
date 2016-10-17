class FuelingsController < AuthenticatedController
  def new
    @fueling = Fueling.new
    @fueling.date = Date.today
  end

  def create
    binding.pry
    Fueling.create fueling_params.merge(vehicle_id: params[:vehicle_id])

    flash[:notice] = 'Added fueling'
    redirect_to vehicle_path params[:vehicle_id]
  end

  private

  def fueling_params
    params.require(:fueling).permit(:date, :gas, :miles, :cost, :description)
  end
end
