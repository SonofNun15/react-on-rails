class MaintenanceEntry extends React.Component {
  render() {
    var deleteUrl = '/vehicles/' + this.props.vehicleId +
                    '/maintenance/' + this.props.maintenance.id

    var editUrl = deleteUrl + '/edit'

    indicator = <i className="fa fa-exclamation-circle important"></i>

    return (
      <div className="entry row">
        <div className="col-sm-3">
          { this.props.maintenance.needsAttention ? indicator : null }
          <i className="fa fa-wrench"></i>
          <span>{this.props.maintenance.mechanic}</span>
        </div>
        <div className="detail col-sm-4">
          <span>{this.props.maintenance.description}</span>
        </div>
        <div className="date col-sm-3">
          <span>{this.props.maintenance.date}</span>
        </div>
        <div className="action col-sm-2">
          <a href={editUrl} className="btn btn-link">
            <i className="fa fa-pencil"></i>
          </a>
          <RailsForm action={deleteUrl} method='DELETE'
                     className='button_form' contents={
            <button type="submit" className="btn btn-link">
              <i className="fa fa-times"></i>
            </button>
          } />
        </div>
      </div>
    )
  }
}

MaintenanceEntry.propTypes = {
  vehicleId: React.PropTypes.number.isRequired,
  maintenance: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    needsAttention: React.PropTypes.bool.isRequired,
    mechanic: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    date: React.PropTypes.string.isRequired,
  }).isRequired,
}
