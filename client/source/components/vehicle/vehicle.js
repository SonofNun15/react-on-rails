import React from 'react'

import VehicleTitle from './title'
import MPGSummary, { mpgType } from './mpg_summary'
import MileageSummary, { mileageType } from './mileage_summary'
import VehicleDataTable from './table'
import FuelingEditor from './fueling_editor'
import MaintenanceEditor from './maintenance_editor'

class Vehicle extends React.Component {
  constructor() {
    super()

    this.state = { editor: null }
  }

  addFueling() {
    const fuelingEditor = <FuelingEditor vehicleId={this.props.vehicle.id}
                                       close={this.closeEditor} />

    this.setState({ editor: fuelingEditor })
  }

  addMaintenance() {
    const maintenanceEditor = <MaintenanceEditor vehicleId={this.props.vehicle.id}
                                               close={this.closeEditor} />

    this.setState({ editor: maintenanceEditor })
  }

  closeEditor() {
    this.setState({ editor: null })
  }

  render() {
    const vehicle = this.props.vehicle
    const editor = <div className="editors">{this.state.editor}</div>

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
    mpg: mpgType,
    mileage: mileageType,
    lineItems: React.PropTypes.array,
  }).isRequired,
}

export default Vehicle
