
import React, { useRef } from "react";
import { BsArrowRightCircle ,BsArrowLeftCircle  } from "react-icons/bs";
import Slider from "react-slick";
const Cardsliders = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    let sliderRef1 = useRef(null);
    const next1 = () => {
        sliderRef1.slickNext();
    };
    const previous1 = () => {
        sliderRef1.slickPrev();
    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className="slider-container desktop1">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-3 ">
                        <h1 className="our1">Our<br></br>Features</h1>
                        <p className="p9">Explore our popular  features</p>
                        <div className="center56">
                            <button className="buttonb" onClick={previous}>
                            <BsArrowLeftCircle  className="left"/>
                            </button>
                            <button className="buttonb" onClick={next}>
                            <BsArrowRightCircle className="left"/>
                            </button>
                        </div>

                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-1 border4">
                       
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-8">
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings1}
                        >
                            <div key={1}>

                                <div className='slider11'>

                                    <div className='slider22'>
                                        <img src='./img/1.png' className='slider223' />
                                    </div>

                                    <div className='slider44'>
                                        <h5 className="text66">Resources </h5>

                                        <p className="text77">Lorem ipsum, lorem ipsum</p>
                                    </div>
                                </div>

                            </div>
                            <div key={2}>
                            <div className='slider111'>
                                    <div className='slider22'>
                                        <img src='./img/2.png' className='slider223' />
                                    </div>

                                    <div className='slider44'>
                                        <h5 className="text66">Time table</h5>

                                        <p className="text77">Lorem ipsum, lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                            <div key={3}>
                            <div className='slider1111'>
                                    <div className='slider22'>
                                        <img src='./img/4.png' className='slider223' />
                                    </div>

                                    <div className='slider44'>
                                        <h5 className="text66">Quiz </h5>

                                        <p className="text77">Lorem ipsum, lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                            <div key={4}>
                            <div className='slider11111'>
                                    <div className='slider22'>
                                        <img src='./img/3.png' className='slider223' />
                                    </div>

                                    <div className='slider44'>
                                        <h5 className="text66">Live Classes </h5>

                                        <p className="text77">Lorem ipsum, lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                           


                        </Slider>
                    </div>

                </div>


            </div>
            <div className="slider-container desktop2">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-3 ">
                        <h1 className="our1">Our<br></br>Features</h1>
                        <p className="p9">Explore our popular  features</p>
                        <div className="center56">
                            <button className="buttonb" onClick={previous1}>
                            <BsArrowLeftCircle  className="left"/>
                            </button>
                            <button className="buttonb" onClick={next1}>
                            <BsArrowRightCircle className="left"/>
                            </button>
                        </div>

                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-1 border4">
                       
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-8">
                        <Slider
                            ref={slider1 => {
                                sliderRef1 = slider1;
                            }}
                            {...settings2}
                        >
                            <div key={1}>

                                <div className='slider11'>

                                    <div className='slider22'>
                                        <img src='./img/1.png' className='slider223' />
                                    </div>

                                    <div className='slider44'>
                                        <h5 className="text66">Resources </h5>

                                        <p className="text77">Lorem ipsum, lorem ipsum</p>
                                    </div>
                                </div>

                            </div>
                            <div key={2}>
                            <div className='slider111'>
                                    <div className='slider22'>
                                        <img src='./img/2.png' className='slider223' />
                                    </div>

                                    <div className='slider44'>
                                        <h5 className="text66">Time table</h5>

                                        <p className="text77">Lorem ipsum, lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                            <div key={3}>
                            <div className='slider1111'>
                                    <div className='slider22'>
                                        <img src='./img/4.png' className='slider223' />
                                    </div>

                                    <div className='slider44'>
                                        <h5 className="text66">Quiz </h5>

                                        <p className="text77">Lorem ipsum, lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                            <div key={4}>
                            <div className='slider11111'>
                                    <div className='slider22'>
                                        <img src='./img/3.png' className='slider223' />
                                    </div>

                                    <div className='slider44'>
                                        <h5 className="text66">Live Classes </h5>

                                        <p className="text77">Lorem ipsum, lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                           


                        </Slider>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Cardsliders
