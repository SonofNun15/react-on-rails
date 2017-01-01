module.exports = React.createClass({
  csrfToken: $('meta[name=csrf-token]').attr('content'),

  render: function() {
    return <input type='hidden' name='authenticity_token' value={this.csrfToken} />
  },
});
