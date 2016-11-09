class VehicleTitle extends React.Component {
  render() {
    var maintenance = <div className="important maintenance">
                        <i className="fa fa-exclamation-circle"></i>
                        Maintenance required!
                      </div>

    return (
      <div>
        <div className="title">
          <h2>
            <span>{this.props.year} </span>
            <span>{this.props.make} </span>
            <span>{this.props.model} </span>
          </h2>
          <div className="buttons">
            <a href={'/vehicles/' + this.props.vehicleId + '/edit'} className="btn btn-default">
              <i className="fa fa-edit"></i>
            </a>
            <RailsForm method="DELETE" action={'/vehicles/' + this.props.vehicleId} className="button_form" contents={
              <button type="submit" className="btn btn-danger">
                <i className="fa fa-times"></i>
              </button>
            } />
          </div>
        </div>
        { this.props.requiresMaintenance ? maintenance : null }
      </div>
    )
  }
}

VehicleTitle.propTypes = {
  requiresMaintenance: React.PropTypes.bool,
  vehicleId: React.PropTypes.number.isRequired,
  year: React.PropTypes.number.isRequired,
  make: React.PropTypes.string.isRequired,
  model: React.PropTypes.string.isRequired,
}
