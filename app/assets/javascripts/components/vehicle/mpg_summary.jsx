var React = require('react');

var mpgType = React.PropTypes.shape({
  lifetime: React.PropTypes.string,
  recent: React.PropTypes.string,
}).isRequired;

module.exports = React.createClass({
  propTypes: {
    mpg: mpgType,
  },

  mpgType: mpgType,

  render: function() {
    return (
      <div className="mileage-summary">
        <h3>Mileage</h3>
        <div className="entries row">
          <span className="lifetime col-xs-6">
            <span className="entry-label">Lifetime: </span>
            <span className="value">
              {this.props.mpg.lifetime} MPG
            </span>
          </span>
          <span className="6mo col-xs-6">
            <span className="entry-label">6 months: </span>
            <span className="value">
              {this.props.mpg.recent} MPG
            </span>
          </span>
        </div>
      </div>
    );
  }
});
