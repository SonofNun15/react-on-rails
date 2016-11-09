class Vehicle extends React.Component {
  constructor() {
    super()

    this.state = { editor: null }
  }

  addFueling() {
    var fuelingEditor = <FuelingEditor vehicleId={this.props.vehicle.id}
                                       close={this.closeEditor.bind(this)} />

    this.setState({ editor: fuelingEditor })
  }

  addMaintenance() {
    var maintenanceEditor = <MaintenanceEditor vehicleId={this.props.vehicle.id}
                                               close={this.closeEditor.bind(this)} />

    this.setState({ editor: maintenanceEditor })
  }

  closeEditor() {
    this.setState({ editor: null })
  }

  render() {
    var vehicle = this.props.vehicle
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
                  onClick={this.addFueling.bind(this)}>
            <i className="fa fa-tachometer"></i> Add fueling
          </button>
          <button type="button" className="btn btn-default"
                  onClick={this.addMaintenance.bind(this)}>
            <i className="fa fa-wrench"></i> Add maintenance
          </button>
        </div>
        { this.state.editor ? editor : null }
        <VehicleDataTable vehicleId={vehicle.id} lineItems={this.props.vehicle.lineItems} />
      </div>
    )
  }
}

Vehicle.propTypes = {
  vehicle: React.PropTypes.shape({
    id: React.PropTypes.number,
    needsMaintenance: React.PropTypes.bool,
    year: React.PropTypes.number,
    make: React.PropTypes.string,
    model: React.PropTypes.string,
    mpg: mpgType, // from mpg_summary.js.jsx
    mileage: mileageType, // from mileage_summary.js.jsx
    lineItems: React.PropTypes.array,
  }).isRequired,
}
