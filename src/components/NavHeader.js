import React from 'react'

class NavHeader extends React.Component {
  render () {
    return(
      <div className="nav-header">
        <p><span className="glyphicon glyphicon-arrow-left"></span> Back</p>
        <h3>MengMeng's Corner</h3>
        <p><span className="glyphicon glyphicon-cog"></span></p>
      </div>
    )
  }
}

export default NavHeader;
