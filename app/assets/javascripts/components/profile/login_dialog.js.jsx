              <input type='hidden' name='utf8' value='✓' />
 var LoginDialog = React.createClass({
  open: function() {
    $('#login-dialog').modal();
  },

  render: function() {
    return (
      <div id="login-dialog" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form method="post" action="/login" acceptCharset="UTF-8">
              <input type='hidden' name='utf8' value='✓' />
              <CSRFToken />
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Log in</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="email" className="control-label">Email: </label>
                  <input type="text" className="form-control" name="email" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="control-label">Password: </label>
                  <input type="password" className="form-control" name="password" id="password" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <a href="/register" className="btn btn-default">Register</a>
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
})
