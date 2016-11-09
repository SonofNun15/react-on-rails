class CSRFToken extends React.Component {
  constructor() {
    super()

    this.csrfToken = $('meta[name=csrf-token]').attr('content')
  }

  render() {
    return <input type='hidden' name='authenticity_token' value={this.csrfToken} />
  }
}

export default CSRFToken
