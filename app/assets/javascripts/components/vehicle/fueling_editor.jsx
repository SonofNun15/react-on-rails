class FuelingEditor extends React.Component {
  constructor() {
    super()

    var now = new Date()

    this.state = {
      gas: '',
      miles: '',
      cost: '',
      date: DateUtility.toDateString(now),
    }
  }

  close() {
    this.props.close()
  }

  createFueling(e) {
    var url = '/vehicles/' + this.props.vehicleId +
              '/fuelings'

    AjaxUtility.post(url, { fueling: this.state }, function(result) {
     console.log(result)
    })
    e.preventDefault()
  }

  onChange(fueling) {
    var newState = Object.assign({}, this.state, fueling)
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.createFueling.bind(this)}>
          <div className="form-group">
            <input className="form-control" placeholder="Gas"
                   type="number" value={this.state.gas}
                   onChange={function(e) { this.onChange({ gas: e.target.value }) }.bind(this)} />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Miles"
                   type="number" value={this.state.miles}
                   onChange={function(e) { this.onChange({ miles: e.target.value }) }.bind(this)} />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Cost"
                   type="number" value={this.state.cost}
                   onChange={function(e) { this.onChange({ cost: e.target.value }) }.bind(this)} />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Date"
                   type="date" value={this.state.date}
                   onChange={function(e) { this.onChange({ date: e.target.value }) }.bind(this)} />
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
        </form>
      </div>
    )
  }
}

FuelingEditor.propTypes = {
  vehicleId: React.PropTypes.number,
  close: React.PropTypes.func,
}
