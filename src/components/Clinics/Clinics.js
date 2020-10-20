import React, { Component } from "react";
import Slider from "react-slick";
import '../../css/interface.css';
import '../../css/clinics.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class Clinics extends Component {
  render() {

    const { clinicsData } = this.props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
      };

    return (
      <div>
        <h2 className='clinics-title'> КЛИНИКИ </h2>
        <Slider {...settings}>

        {clinicsData.map( (clinic, index) => {
          const textColorObj = index === 1? { color: 'black' } : null;  
           return (
          <div>
            <div className='slick-item' style={ { background: clinic.color, ...textColorObj } }>
                <div className='slick-item__img'>
                  <img src={clinic.img}></img>
                </div>
                <div className='slick-item__text'><span >{clinic.text.toUpperCase()}</span></div>
                <img className='slick-item__intersect' src="images/clinics/intersect.png"></img>
            </div>
        </div>);
        })}
        </Slider>
      </div>
    );
  }
}