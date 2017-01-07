function extractCSRFToken() {
  var metaTag = document.querySelector('meta[name=csrf-token]');
  return metaTag.content;
}

var CSRFToken = React.createClass({
  csrfToken: extractCSRFToken(),

  render: function() {
    return <input type='hidden' name='authenticity_token' value={this.csrfToken} />
  },
});

