var FuelingEditor = React.createClass({
  propTypes: {
    close: React.PropTypes.func,
  },

  close: function() {
    this.props.close();
  },

  render: function() {
    return (
      <div>
        Fueling
        <div className="pull-right buttons">
          <button type="submit" className="btn btn-danger"
                  onClick={this.close}>
            <i className="fa fa-times"></i> Close
          </button>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  },
});
