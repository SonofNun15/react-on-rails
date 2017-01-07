import React from 'react'

import { ajax } from '../../utilities/ajax_util'
import { date } from '../../utilities/date_util'

class FuelingEditor extends React.Component {
  constructor() {
    super()

    this.close = this.close.bind(this)
    this.createFueling = this.createFueling.bind(this)

    const now = new Date()

    this.state = {
      gas: '',
      miles: '',
      cost: '',
      date: date.toDateString(now),
    }
  }

  close() {
    this.props.close()
  }

  createFueling(e) {
    const url = '/vehicles/' + this.props.vehicleId +
                '/fuelings'

    ajax.post(url, { fueling: this.state })
    e.preventDefault()
  }

  onChange(fueling) {
    const newState = Object.assign({}, this.state, fueling)
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.createFueling}>
          <div className="form-group">
            <input className="form-control" placeholder="Gas"
                   type="number" value={this.state.gas}
                   onChange={(e) => { this.onChange({ gas: e.target.value }) }} />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Miles"
                   type="number" value={this.state.miles}
                   onChange={(e) => { this.onChange({ miles: e.target.value }) }} />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Cost"
                   type="number" value={this.state.cost}
                   onChange={(e) => { this.onChange({ cost: e.target.value }) }} />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Date"
                   type="date" value={this.state.date}
                   onChange={(e) => { this.onChange({ date: e.target.value }) }} />
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
        </form>
      </div>
    )
  }
}

FuelingEditor.propTypes = {
  vehicleId: React.PropTypes.number,
  close: React.PropTypes.func,
}

export default FuelingEditor
