import React from 'react'

export const mileageType = React.PropTypes.shape({
  lifetime: React.PropTypes.string,
  recent: React.PropTypes.string,
  sinceMaintenance: React.PropTypes.string,
})

class MileageSummary extends React.Component {
  render() {
    return (
      <div className="mileage-summary">
        <h3>Mileage</h3>
        <div className="entries row">
          <span className="lifetime col-xs-6">
            <span className="entry-label">Lifetime: </span>
            <span className="value">
              {this.props.mileage.lifetime} miles
            </span>
          </span>
          <span className="6mo col-xs-6">
            <span className="entry-label">6 months: </span>
            <span className="value">
              {this.props.mileage.recent} miles
            </span>
          </span>
          <span className="maintenance-miles col-xs-12">
            <span className="entry-label">Since maintenance: </span>
            <span className="value">
              {this.props.mileage.sinceMaintenance} miles
            </span>
          </span>
        </div>
      </div>
    )
  }
}

MileageSummary.propTypes = {
  mileage: mileageType,
}

export default MileageSummary
