import React from 'react';
import {Link} from 'react-router';

class BlogCard extends React.Component {
  render () {
    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="http://odowb0dhc.bkt.clouddn.com/16.jpg" />
          <div className="caption">
            <h3>Thumbnail label</h3>
            <p>...</p>
            <p><a to='/about' className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogCard;
