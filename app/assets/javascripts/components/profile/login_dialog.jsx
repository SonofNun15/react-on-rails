var RailsForm = require('../rails_form.jsx');

module.exports = React.createClass({
  open: function() {
    $('#login-dialog').modal();
  },

  render: function() {
    return (
      <div id="login-dialog" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <RailsForm method="post" action="/login" contents={
              <div>
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
              </div>
            } />
          </div>
        </div>
      </div>
    );
  }
});
