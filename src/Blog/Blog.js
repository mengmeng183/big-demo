import React from 'react';
import BlogCard from '../components/BlogCard';

class Blog extends React.Component {
  render () {
    return(
      <div style={{width:'100%'}}>
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
