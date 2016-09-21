import React from 'react'

class WorkCard extends React.Component {
  render () {
    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.img} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <p>
              <a to='/about' className="btn btn-primary" role="button">Button</a>
              <a href="#" className="btn btn-default" role="button">Button</a>
              
              </p>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkCard;
