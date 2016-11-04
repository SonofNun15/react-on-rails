var VehicleDataTable = React.createClass({
  propTypes: {
    vehicleId: React.PropTypes.number,
    lineItems: React.PropTypes.array,
  },

  render: function() {
    return (
      <div className="data-table">
        {
          this.props.lineItems.map(function(item) {
            if (item.type == 'fueling') {
              return <FuelingEntry key={item.key} vehicleId={this.props.vehicleId}
                                   fueling={item} />
            } else if (item.type == 'maintenance') {
              return <MaintenanceEntry key={item.key} vehicleId={this.props.vehicleId}
                                       maintenance={item} />
            }
          }.bind(this))
        }
      </div>
    );
  },
});
