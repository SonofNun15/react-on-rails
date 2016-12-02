export const mpgType = React.PropTypes.shape({
  lifetime: React.PropTypes.string,
  recent: React.PropTypes.string,
}).isRequired

class MPGSummary extends React.Component {
  render() {
    return (
      <div className="mileage-summary">
        <h3>MPG</h3>
        <div className="entries row">
          <span className="lifetime col-xs-6">
            <span className="entry-label">Lifetime: </span>
            <span className="value">
              {this.props.mpg.lifetime} MPG
            </span>
          </span>
          <span className="6mo col-xs-6">
            <span className="entry-label">6 months: </span>
            <span className="value">
              {this.props.mpg.recent} MPG
            </span>
          </span>
        </div>
      </div>
    )
  }
}

MPGSummary.propTypes = {
  mpg: mpgType,
}

export default MPGSummary
