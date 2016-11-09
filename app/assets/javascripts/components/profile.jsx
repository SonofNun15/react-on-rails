class Profile extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <LoggedIn name={this.props.user.name} gravatarHash={this.props.user.gravatarHash} />
    } else {
      return <LoggedOut />
    }
  }
}

Profile.propTypes = {
  loggedIn: React.PropTypes.bool,
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    gravatarHash: React.PropTypes.string,
  }),
}
