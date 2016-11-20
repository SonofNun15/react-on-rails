import ReactDOM from 'react-dom'
import React from 'react'

import Profile from './components/profile'
import Vehicle from './components/vehicle/vehicle'

const components = {
  'Profile': Profile,
  'Vehicle': Vehicle,
}

window.renderReact = (id, componentName, data) => {
  const component = components[componentName]

  if (component) {
    ReactDOM.render(React.createElement(component, data),
                    document.getElementById(id))
  }
}
