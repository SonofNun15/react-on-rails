import React from 'react'

import LoginDialog from './login_dialog'

class LoggedOut extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.openDialog = this.openDialog.bind(this)
  }

  openDialog() {
    this.refs.dialog.open()
  }

  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={this.openDialog}>Login</button>
        <LoginDialog ref="dialog" />
      </div>
    )
  }
}

export default LoggedOut
