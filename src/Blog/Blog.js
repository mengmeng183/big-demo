import React from 'react';
import BlogCard from '../components/BlogCard';
import {getBlogCard} from '../utils/helpers';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getBlogCard()
    .then((resData) => {
      this.setState({
        data:resData.getData,
        wait:false
      })
    })
  }
  render () {
    return(
      <div style={{width:'100%'}}>
        {this.state.wait ? 'loading...' : this.state.data.map( (item,index) => <BlogCard {...item} key={index} index={index}/> )}
      </div>
    )
  }
}

export default Blog;
