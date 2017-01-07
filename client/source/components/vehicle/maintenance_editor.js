import React from 'react'

import { ajax } from '../../utilities/ajax_util'
import { date } from '../../utilities/date_util'

class MaintenanceEditor extends React.Component {
  constructor() {
    super()

    const now = new Date()

    this.createMaintenance = this.createMaintenance.bind(this)
    this.close = this.close.bind(this)

    this.state = {
      mechanic: '',
      description: '',
      cost: '',
      date: date.toDateString(now),
    }
  }

  close() {
    this.props.close()
  }

  createMaintenance(e) {
    const url = '/vehicles/' + this.props.vehicleId +
                '/maintenance'

    ajax.post(url, { maintenance: this.state })
    e.preventDefault()
  }

  onChange(maintenance) {
    const newState = Object.assign({}, this.state, maintenance)
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.createMaintenance}>
          <div>
            <div className="form-group">
              <input className="form-control" placeholder="Mechanic"
                     onChange={(e) => { this.onChange({ mechanic: e.target.value }) }}
                     type="text" value={this.state.mechanic} />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Description"
                     onChange={(e) => { this.onChange({ description: e.target.value }) }}
                     type="text" value={this.state.description} />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Cost"
                     onChange={(e) => { this.onChange({ cost: e.target.value }) }}
                     type="number" value={this.state.cost} />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Date"
                     onChange={(e) => { this.onChange({ date: e.target.value }) }}
                     type="date" value={this.state.date} />
            </div>
            <div className="pull-right buttons">
              <button type="button" className="btn btn-danger"
                      onClick={this.close}>
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

export default MaintenanceEditor
