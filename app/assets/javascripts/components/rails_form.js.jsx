var RailsForm = React.createClass({
  propTypes: {
   method: React.PropTypes.string,
   action: React.PropTypes.string,
   contents: React.PropTypes.element,
   className: React.PropTypes.string,
  },

  getMethod: function() {
    if (this.props.method.toLowerCase() == 'get') {
      return 'GET';
    } else {
      return 'POST';
    }
  },

  render: function() {
    return (
      <form method={this.getMethod()} action={this.props.action} acceptCharset="UTF-8"
            className={this.props.className}>
        <input type="hidden" name="utf8" value="✓" />
        <input type="hidden" name="_method" value={this.props.method} />
        <CSRFToken />
        {this.props.contents}
      </form>
    );
  },
})
