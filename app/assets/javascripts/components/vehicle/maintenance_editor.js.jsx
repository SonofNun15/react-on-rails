var MaintenanceEditor = React.createClass({
  propTypes: {
    close: React.PropTypes.func,
  },

  close: function() {
    this.props.close();
  },

  createMaintenance: function(e) {
    console.log('do it!');
    e.preventDefault();
  },

  render: function() {
    var newMaintenanceUrl = '/vehicles' + this.props.vehicleId +
                            '/maintenance'

    return (
      <div>
        <form className="form-inline" onSubmit={this.createMaintenance}>
          <div>
            <div className="form-group">
              <input className="form-control" placeholder="Mechanic"
                     type="text" />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Description"
                     type="text" />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Cost"
                     type="number" />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Date"
                     type="date" />
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
    );
  },
});
