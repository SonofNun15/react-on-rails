var LoggedOut = React.createClass({
  openDialog: function() {
    this.refs.dialog.open();
  },

  render: function() {
    return (
      <div>
        <button className="btn btn-default" onClick={this.openDialog}>Login</button>
        <LoginDialog ref="dialog" />
      </div>
    );
  }
})
