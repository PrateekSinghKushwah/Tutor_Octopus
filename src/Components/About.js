import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='w-3/4 m-auto '>
      <div className='mt-20 desktop1'>
        <Slider {...settings}>

          {data.map((d) => (
              <div class="row">

              <div class="col-xs-12 col-sm-6 col-md-12">
            <div className='slider1'>
              <div className='slider2'>
                <img src={d.img} className='slider2' />
              </div>

              <div className='slider4'>
                <h5 className="text6">{d.name}</h5>
                <div className="slide5">
                  <img src="./img/start.jpeg" />
                </div>
                <p className="text7">{d.dis}</p>
              </div>
            </div> </div> </div>
          ))}
        </Slider>

      </div>

      <div className='mt-20 desktop2'>
        <Slider {...settings3}>

          {data.map((d) => (
              <div class="row">

              <div class="col-xs-12 col-sm-6 col-md-12">
            <div className='slider1'>
              <div className='slider2'>
                <img src={d.img} className='slider2' />
              </div>

              <div className='slider4'>
                <h5 className="text6">{d.name}</h5>
                <div className="slide5">
                  <img src="./img/start.jpeg" />
                </div>
                <p className="text7">{d.dis}</p>
              </div>
            </div> </div> </div>
          ))}
        </Slider>

      </div>
    </div>
    
  )
}

const data = [
   {
    name: `Cathy`,
    img: `/img/img1.jpeg`,
    dis:`Subjects: ACT, ACT English...`
  },
  {
    name: `Cristina`,
    img: `/img/img2.jpeg`,
    dis:`Subjects: ACT, ACT English...`
  },
  {
    name: `Charles`,
    img: `/img/img3.jpeg`,
    dis:`Subjects: ACT, ACT English...`
  },
  {
    name: `Eliza`,
    img: `/img/img4.jpeg`,
    dis:`Subjects: ACT, ACT English...`
  },{
    name: `Cathy`,
    img: `/img/img1.jpeg`,
    dis:`Subjects: ACT, ACT English...`
  },
  {
    name: `Cristina`,
    img: `/img/img2.jpeg`,
    dis:`Subjects: ACT, ACT English...`
  },
  {
    name: `Charles`,
    img: `/img/img3.jpeg`,
    dis:`Subjects: ACT, ACT English...`
  },
  {
    name: `Eliza`,
    img: `/img/img4.jpeg`,
    dis:`Subjects: ACT, ACT English...`
  }
]

export default About
