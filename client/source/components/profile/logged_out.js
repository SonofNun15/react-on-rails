import React from 'react'

import LoginDialog from './login_dialog'

class LoggedOut extends React.Component {
  openDialog() {
    this.refs.dialog.open()
  }

  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={this.openDialog.bind(this)}>Login</button>
        <LoginDialog ref="dialog" />
      </div>
    )
  }
}

export default LoggedOut