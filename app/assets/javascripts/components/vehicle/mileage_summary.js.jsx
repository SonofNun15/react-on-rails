var MileageSummary = React.createClass({
  render: function() {
    return (
      <div className="mileage-summary">
        <h3>Mileage</h3>
        <div className="entries row">
          <span className="lifetime col-xs-6">
            <span className="entry-label">Lifetime:</span>
            <span className="value">
              203,000
              miles
            </span>
          </span>
          <span className="6mo col-xs-6">
            <span className="entry-label">6 months:</span>
            <span className="value">
              160
              miles
            </span>
          </span>
          <span className="maintenance-miles col-xs-12">
            <span className="entry-label">Since maintenance:</span>
            <span className="value">
              160
              miles
            </span>
          </span>
        </div>
      </div>
    );
  },
});
