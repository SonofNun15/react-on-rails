class MaintenanceEditor extends React.Component {
  constructor() {
    super()

    var now = new Date();

    this.state = {
      mechanic: '',
      description: '',
      cost: '',
      date: dateUtil.toDateString(now),
    }
  }

  close() {
    this.props.close()
  }

  createMaintenance(e) {
    var url = '/vehicles/' + this.props.vehicleId +
              '/maintenance'

    ajax.post(url, { maintenance: this.state }, function(result) {
      console.log(result)
    })
    e.preventDefault()
  }

  onChange(maintenance) {
    var newState = Object.assign({}, this.state, maintenance)
    this.setState(newState)
  }

  render() {
    var newMaintenanceUrl = '/vehicles' + this.props.vehicleId +
                            '/maintenance'

    return (
      <div>
        <form className="form-inline" onSubmit={this.createMaintenance.bind(this)}>
          <div>
            <div className="form-group">
              <input className="form-control" placeholder="Mechanic"
                     onChange={function(e) { this.onChange({ mechanic: e.target.value }) }.bind(this)}
                     type="text" value={this.state.mechanic} />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Description"
                     onChange={function(e) { this.onChange({ description: e.target.value }) }.bind(this)}
                     type="text" value={this.state.description} />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Cost"
                     onChange={function(e) { this.onChange({ cost: e.target.value }) }.bind(this)}
                     type="number" value={this.state.cost} />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Date"
                     onChange={function(e) { this.onChange({ date: e.target.value }) }.bind(this)}
                     type="date" value={this.state.date} />
            </div>
            <div className="pull-right buttons">
              <button type="button" className="btn btn-danger"
                      onClick={this.close.bind(this)}>
                <i className="fa fa-times"></i> Close
              </button>
              <button type="submit" className="btn btn-success">
                <i className="fa fa-plus"></i> Add
              </button>
            </div>
            <div className="clearfix"></div>
          </div>
        </form>
      </div>
    )
  }
}

MaintenanceEditor.propTypes = {
  vehicleId: React.PropTypes.number,
  close: React.PropTypes.func,
}
