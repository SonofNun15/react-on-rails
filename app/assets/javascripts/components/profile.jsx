import React from 'react'

import LoggedIn from './profile/logged_in.jsx'
import LoggedOut from './profile/logged_out.jsx'

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

export default Profile
