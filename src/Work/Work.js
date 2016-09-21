import React from 'react';
import WorkCard from '../components/workCard';
import {getWorkCard} from '../utils/helpers.js';

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getWorkCard()
    .then((resData) => {
      this.setState({
        data:resData.getData,
        wait:false
      })
    })
  }
  render () {
    return(
      <div className='row'>
        {this.state.wait ? 'loading...' : this.state.data.map( (item,index) =>
          <WorkCard {...item} key={index} />)}
      </div>
    )
  }
}

export default Work;
