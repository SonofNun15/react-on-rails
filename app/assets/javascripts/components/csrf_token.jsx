class CSRFToken extends React.Component {
  constructor() {
    super()

    this.csrfToken = this.extractCSRFToken()
  }

  extractCSRFToken() {
    const metaTag = document.querySelector('meta[name=csrf-token]')
    return metaTag.content
  }

  render() {
    return <input type='hidden' name='authenticity_token' value={this.csrfToken} />
  }
}

export default CSRFToken
