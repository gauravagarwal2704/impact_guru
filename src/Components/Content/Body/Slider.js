import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './Body.css';

class Slider extends Component {

  render() {
    return (
       <div>
        <Carousel>
              <div>
                  <img alt="" src="/assets/images/slider/1.jpg" />
              </div>
              <div>
                  <img alt="" src="/assets/images/slider/2.jpg" />
              </div>
              <div>
                  <img alt="" src="/assets/images/slider/3.jpg" />
              </div>
          </Carousel>


       </div>
    );
  }
}

export default Slider;
