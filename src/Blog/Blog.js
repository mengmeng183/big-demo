import React from 'react';
import BlogCard from '../components/blogCard';

class Blog extends React.Component {
  render () {
    return(
      <div className='row'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    )
  }
}

export default Blog;
