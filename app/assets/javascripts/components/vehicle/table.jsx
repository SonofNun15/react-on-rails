import FuelingEntry from './fueling_entry.jsx'
import MaintenanceEntry from './maintenance_entry.jsx'

class VehicleDataTable extends React.Component {
  render() {
    return (
      <div className="data-table">
        {
          this.props.lineItems.map(function(item) {
            if (item.type == 'fueling') {
              return <FuelingEntry key={item.key} vehicleId={this.props.vehicleId}
                                   fueling={item} />
            } else if (item.type == 'maintenance') {
              return <MaintenanceEntry key={item.key} vehicleId={this.props.vehicleId}
                                       maintenance={item} />
            }
          }.bind(this))
        }
      </div>
    )
  }
}

VehicleDataTable.propTypes = {
  vehicleId: React.PropTypes.number,
  lineItems: React.PropTypes.array,
}

export default VehicleDataTable
