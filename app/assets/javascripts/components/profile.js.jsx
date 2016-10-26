var Profile = React.createClass({
  propTypes: {
    loggedIn: React.PropTypes.bool,
    user: React.PropTypes.node
  },

  render: function() {
    return (
      <div>
        <div>Logged In: {this.props.loggedIn}</div>
        <div>User: {this.props.user}</div>
      </div>
    );
  }
});
