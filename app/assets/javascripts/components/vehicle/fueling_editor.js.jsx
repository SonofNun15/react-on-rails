var FuelingEditor = React.createClass({
  propTypes: {
    close: React.PropTypes.func,
  },

  close: function() {
    this.props.close();
  },

  render: function() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input className="form-control" placeholder="Gas"
                 type="number" />
        </div>
        <div className="form-group">
          <input className="form-control" placeholder="Miles"
                 type="number" />
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
          <button type="button" className="btn btn-success">
            <i className="fa fa-plus"></i> Add
          </button>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  },
});
