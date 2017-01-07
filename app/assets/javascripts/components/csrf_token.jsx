function extractCSRFToken() {
  var metaTag = document.querySelector('meta[name=csrf-token]');
  return metaTag.content;
}

module.exports = React.createClass({
  csrfToken: extractCSRFToken(),

  render: function() {
    return <input type='hidden' name='authenticity_token' value={this.csrfToken} />
  },
});
