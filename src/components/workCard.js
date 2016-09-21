import React from 'react'

class WorkCard extends React.Component {
  render () {
    retrun(
      <div>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="holder.js/300x300">
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkCard;
