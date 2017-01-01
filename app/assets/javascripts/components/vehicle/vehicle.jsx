var VehicleTitle = require('./title.jsx');
var MPGSummary = require('./mpg_summary.jsx');
var MileageSummary = require('./mileage_summary.jsx');
var VehicleDataTable = require('./table.jsx');
var FuelingEditor = require('./fueling_editor.jsx');
var MaintenanceEditor = require('./maintenance_editor.jsx');

module.exports = React.createClass({
  propTypes: {
    vehicle: React.PropTypes.shape({
      id: React.PropTypes.number,
      needsMaintenance: React.PropTypes.bool,
      year: React.PropTypes.number,
      make: React.PropTypes.string,
      model: React.PropTypes.string,
      mpg: MPGSummary.mpgType, // from mpg_summary.js.jsx
      mileage: MileageSummary.mileageType, // from mileage_summary.js.jsx
      lineItems: React.PropTypes.array,
    }).isRequired,
  },

  getInitialState: function() {
    return {
      editor: null,
    };
  },

  addFueling: function() {
    var fuelingEditor = <FuelingEditor vehicleId={this.props.vehicle.id}
                                       close={this.closeEditor} />

    this.setState({ editor: fuelingEditor });
  },

  addMaintenance: function() {
    var maintenanceEditor = <MaintenanceEditor vehicleId={this.props.vehicle.id}
                                               close={this.closeEditor} />

    this.setState({ editor: maintenanceEditor });
  },

  closeEditor: function() {
    this.setState({ editor: null });
  },

  render: function() {
    var vehicle = this.props.vehicle;
    var editor = <div className="editors">{this.state.editor}</div>

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
          <button type="button" className="btn btn-default"
                  onClick={this.addFueling}>
            <i className="fa fa-tachometer"></i> Add fueling
          </button>
          <button type="button" className="btn btn-default"
                  onClick={this.addMaintenance}>
            <i className="fa fa-wrench"></i> Add maintenance
          </button>
        </div>
        { this.state.editor ? editor : null }
        <VehicleDataTable vehicleId={vehicle.id} lineItems={this.props.vehicle.lineItems} />
      </div>
    );
  },
});
