import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

class Pic extends React.Component {
  render () {
    return(
      <Carousel>
        <Carousel.Item>
          <img style={{width:'100%'}} height={200} alt="900x500" src="http://img4.imgtn.bdimg.com/it/u=2953050150,2985881156&fm=21&gp=0.jpg"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{width:'100%'}} height={200} alt="900x500" src="http://img2.imgtn.bdimg.com/it/u=1924117447,2571851303&fm=21&gp=0.jpg"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{width:'100%'}} height={200} alt="900x500" src="http://img5.imgtn.bdimg.com/it/u=3156374301,3878091066&fm=21&gp=0.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Pic;
