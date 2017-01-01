var AjaxUtility = require('../../utilities/ajax_util');
var DateUtility = require('../../utilities/date_util');

module.exports = React.createClass({
  propTypes: {
    vehicleId: React.PropTypes.number,
    close: React.PropTypes.func,
  },

  getInitialState: function() {
    var now = new Date();

    return {
      gas: '',
      miles: '',
      cost: '',
      date: DateUtility.toDateString(now),
    };
  },

  close: function() {
    this.props.close();
  },

  createFueling: function(e) {
    var url = '/vehicles/' + this.props.vehicleId +
              '/fuelings';

    AjaxUtility.post(url, { fueling: this.state }, function(result) {
     console.log(result);
    });
    e.preventDefault();
  },

  onChange: function(fueling) {
    var newState = Object.assign({}, this.state, fueling);
    this.setState(newState);
  },

  render: function() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.createFueling}>
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
    );
  },
});
