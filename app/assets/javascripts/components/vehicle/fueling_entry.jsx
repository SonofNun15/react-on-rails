var React = require('react');

var RailsForm = require('../rails_form.jsx');

module.exports = React.createClass({
  propTypes: {
    vehicleId: React.PropTypes.number,
    fueling: React.PropTypes.shape({
      id: React.PropTypes.number,
      aboveAverageMpg: React.PropTypes.bool,
      mpg: React.PropTypes.string,
      miles: React.PropTypes.string,
      date: React.PropTypes.string,
    })
  },

  render: function() {
    var deleteUrl = '/vehicles/' + this.props.vehicleId +
                    '/fuelings/' + this.props.fueling.id;

    var editUrl = deleteUrl + '/edit'

    return (
      <div className="entry row">
        <div className="col-sm-3">
          {
            this.props.fueling.aboveAverageMpg
              ? <i className="fa modifier fa-caret-up increase"></i>
              : <i className="fa modifier fa-caret-down decrease"></i>
          }
          <i className="fa fa-fw fa-tachometer"></i>
          <span> {this.props.fueling.mpg} MPG</span>
        </div>
        <div className="detail col-sm-4">
          <span>{this.props.fueling.miles} miles</span>
        </div>
        <div className="date col-sm-3">
          <span>{this.props.fueling.date}</span>
        </div>
        <div className="action col-sm-2">
          <a href={editUrl} className="btn btn-link">
            <i className="fa fa-pencil"></i>
          </a>
          <RailsForm method="DELETE" action={deleteUrl} className="button_form" contents={
            <button type="submit" className="btn btn-link">
              <i className="fa fa-times"></i>
            </button>
          } />
        </div>
      </div>
    );
  },
})
