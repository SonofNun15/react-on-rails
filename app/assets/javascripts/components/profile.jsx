var React = require('react');

var LoggedIn = require('./profile/logged_in.jsx');
var LoggedOut = require('./profile/logged_out.jsx');

module.exports = React.createClass({
  propTypes: {
    loggedIn: React.PropTypes.bool,
    user: React.PropTypes.shape({
      name: React.PropTypes.string,
      email: React.PropTypes.string,
      gravatarHash: React.PropTypes.string,
    }),
  },

  render: function() {
    if (this.props.loggedIn) {
      return <LoggedIn name={this.props.user.name} gravatarHash={this.props.user.gravatarHash} />
    } else {
      return <LoggedOut />
    }
  }
});
