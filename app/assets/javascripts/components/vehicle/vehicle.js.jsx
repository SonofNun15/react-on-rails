var Vehicle = React.createClass({
  propTypes: {
    vehicle: React.PropTypes.shape({
      id: React.PropTypes.number,
      needsMaintenance: React.PropTypes.bool,
      year: React.PropTypes.number,
      make: React.PropTypes.string,
      model: React.PropTypes.string,
      mpg: mpgType, // from mpg_summary.js.jsx
      mileage: mileageType, // from mileage_summary.js.jsx
    }).isRequired,
  },

  render: function() {
    var vehicle = this.props.vehicle;

    return (
      <div className="vehicle">
        <VehicleTitle vehicleId={vehicle.id} requiresMaintenance={vehicle.needsMaintenance}
                      year={vehicle.year} make={vehicle.make} model={vehicle.model} />
        <div className="summaries row">
          <div className="col-sm-6">
            <MPGSummary mpg={this.props.vehicle.mpg} />
          </div>
          <div className="col-sm-6">
            <MileageSummary mileage={this.props.vehicle.mileage} />
          </div>
        </div>
        <div className="buttons">
          <a href="/vehicles/11/fuelings/new" className="btn btn-default">
            <i className="fa fa-tachometer"></i> Add fueling
          </a>
          <a href="/vehicles/11/maintenance/new" className="btn btn-default">
            <i className="fa fa-wrench"></i> Add maintenance
          </a>
        </div>
        <VehicleDataTable />
      </div>
    );
  },
});
