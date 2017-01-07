import React from 'react'

import FuelingEntry from './fueling_entry'
import MaintenanceEntry from './maintenance_entry'

class VehicleDataTable extends React.Component {
  render() {
    const { vehicleId } = this.props
    return (
      <div className="data-table">
        {
          this.props.lineItems.map((item) => {
            if (item.type == 'fueling') {
              return <FuelingEntry key={item.key} vehicleId={vehicleId}
                                   fueling={item} />
            } else if (item.type == 'maintenance') {
              return <MaintenanceEntry key={item.key} vehicleId={vehicleId}
                                       maintenance={item} />
            }
          })
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
