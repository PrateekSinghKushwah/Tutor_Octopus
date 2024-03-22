import React from 'react'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import './Home.css'
import { PiDotOutlineFill, PiMedalFill, PiStudentBold } from "react-icons/pi";
import { FaLaptop, FaUserGraduate } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import About from './About';
import Cardsliders from './Cardsliders';
import Contact from './Contact';
const Home = () => {

    return (
        <div>
            <div style={{ background: "#fff8f8" }} className='bg1'>
                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 col-sm-6">
                            <div class="box1">
                                <img src='./img/line2.png' className='lines1' /> <h1 className='explore'>Explore the world of<br></br> Teaching</h1>
                                <p className='p1'>Now you can easily deepen your chosen so that you can get the tutor you want.  </p>
                                <Stack direction="horizontal" gap={3} className='stakc'>
                                    <div className="p-2"><Button variant="" className='getstart'>Get started </Button></div>
                                    <div className="p-2"><Button variant="" className='getstart1'>Explore more</Button></div>

                                </Stack>

                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <div class="box1">
                                <img src='./img/image1.png' className='imggilrs' />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='section2'>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-1"></div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="box5">
                                <img src='./img/line2.png' className='lines12' /> <h1 className='Trusted'>
                                    Trusted by institutions of allshapes sizes across105 countries</h1>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-3">
                            <div class="box5">
                                <Card className="card1">
                                    <h5 className="teacher">100,000+</h5>
                                    <h5 className="teacher">Teachers & Students</h5>
                                </Card>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-3">
                            <div class="box5">
                                <Card className="card2">
                                    <h5 className="teacher" >175,000+</h5>
                                    <h5 className="teacher">Quizzes & Test</h5>
                                </Card>
                                <Card className="card3">
                                    <h5 className="teacher">175,000+</h5>
                                    <h5 className="teacher">Quizzes & Test</h5>
                                </Card>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-1"></div>
                    </div>
                </div>

            </div>
            <div style={{ background: "#fff8f8" }} className='bg1'>
                <div class="container">
                    <div className='center4'>
                        <img src='./img/line2.png' className="lines12" />  <h1 className='explore7'>Analytics Business Management</h1>
                    </div>
                    <div class="row">

                        <div class="col-xs-12 col-sm-6">
                            <img src='./img/group.png' className='imggilrss' />
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <p className='p2'>Contrary to popular belief, Lorem Ipsum is
                                not simply random text. It has roots in a piece of classical
                                Latin literature from 45 BC, making it over 2000 years old.
                                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, </p>
                            <Button variant="" className='getstart my-4'>Learn More </Button>
                        </div>

                    </div>
                </div>

            </div>

            <div className='section3'>


                <Container>
                    <div className='center4 my-4'>
                        <img src='./img/line2.png' className="lines12" />  <h1 className='explore7'>Explore Our Course Categories</h1>
                    </div>
                    <br></br>
                    <Row>
                        <Col sm={3}>
                            <Card className='card4'>
                                <img src='./img/DigitalMarketing.png' className='digital' />


                            </Card>
                            <h5 className='text-center my-3'>Digital Marketing</h5>
                        </Col>
                        <Col sm={3}>
                            <Card className='card5'>
                                <img src='./img/Business.png' className='digital' />


                            </Card>
                            <h5 className='text-center my-3'>Business</h5>
                        </Col>
                        <Col sm={3}>
                            <Card className='card6'>
                                <img src='./img/WebDesign.png' className='digital' />


                            </Card>
                            <h5 className='text-center my-3'>Web Design</h5>
                        </Col>
                        <Col sm={3}>
                            <Card className='card7'>
                                <img src='./img/ContentWriting.png' className='digital' />


                            </Card>
                            <h5 className='text-center my-3'>Content Writing</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ background: "#fff8f8" }} className='bg2'>
                <Container>

                    <div className='center4'>
                        <img src='./img/line2.png' className="lines12" />  <h1 className='explore7'>Free Unlimited Live Classes</h1>
                    </div>
                    <div class="container">
                        <div class="row">

                            <div class="col-xs-12 col-sm-6">
                                <div class="box1">
                                    <p className='p2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, </p>
                                    <Button variant="" className='getstart my-4'>Learn More </Button>

                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6">
                                <div class="box1">
                                    <img src='./img/student.png' className='img3' />
                                </div>
                            </div>

                        </div>
                    </div>

                </Container>
            </div>
            <div style={{ background: "#1d3748" }} className='goldmedal'>
                <div class="container" >
                    <div class="row">

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="box1">
                                <FaUserGraduate className='student' />
                                <h5 className='result1'>EXCELLENT <br></br>REAL RESULTS</h5>
                                <p className='result2'>Hundreds of proven success stories by
                                    experienced tutors with impressive track
                                    records</p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="box1">
                                <FaLaptop className='student' />
                                <h5 className='result1'>IN HOME AND ONLINE TUTORING</h5>
                                <p className='result2'>Hire a tutor on your terms. Tutoring Sessions
                                    can be scheduled as soon as the same day</p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="box1">
                                <FaLock className='student' />
                                <h5 className='result1'>AFFORDABLE AND <br></br>SECURE</h5>
                                <p className='result2'>The most competitive rates in the industry with
                                    quality, support, and security you can trust</p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="box1">
                                <PiMedalFill className='student' />
                                <h5 className='result1'>BEST MATCH<br></br> GUARANTEE</h5>
                                <p className='result2'>If you are not satisfied after the 1st hour, you
                                    will be matched with another tutor free of
                                    charge</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='section4'>
                <div className='center5 '>
                    <img src='./img/line2.png' className="lines12" />  <h1 className='explore7'>Why Choose Us</h1>
                </div>
                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 col-sm-4">
                            <div class="box">
                                <img src='./img/price.png' className='price' />
                                <h5 className='flexible'>Flexible payment plans</h5>
                                <p className='flexible1'>Pay fee in easy (interest free) instalments. You can choose
                                    from monthly / quarterly payment options.</p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-4">
                            <div class="box2">
                                <img src='./img/price.png' className='price' />
                                <h5 className='flexible'>Flexible payment plans</h5>
                                <p className='flexible1'>Pay fee in easy (interest free) instalments. You can choose
                                    from monthly / quarterly payment options.</p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-4">
                            <div class="box3">
                                <img src='./img/price.png' className='price' />
                                <h5 className='flexible'>Flexible payment plans</h5>
                                <p className='flexible1'>Pay fee in easy (interest free) instalments. You can choose
                                    from monthly / quarterly payment options.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='section4'>
                <div className='center6 '>
                    <img src='./img/line2.png' className="lines12" />  <h1 className='explore7 text-center'>Learn More About Educate
                        Expand Your Knowledge and Skills!</h1>
                </div>

                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 col-sm-6 col-md-3">

                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-3">

                        </div>

                    </div>
                </div>
            </div>

            <div style={{ background: "#1d3748" }} className='goldmedal'>
                <Container>
                    <Cardsliders />
                </Container>
            </div>
            <div style={{ background: "#fff8f8" }} className='goldmedal bnm'>
                <Container>
                    <div className='center4 my-5'>
                        <img src='./img/line2.png' className="lines12" />  <h1 className='explore7'>   Meet with Our Expert Tutors</h1>
                    </div>


                    <About />
                    </Container>
            </div>

            <div style={{ background: "#1d3748" }} className='bg6'>
                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 col-sm-6">
                            <div class="box1">

                                <h5 className='contactv'> Contact Us</h5>

                                <Contact />
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <div class="box1">
                                <p className='p90'>Frequently Asked Questions?</p>
                                <div class="accordion">

                                    <div class="accordion-item1">
                                        <input type="checkbox" id="accordion8" />
                                        <label for="accordion8" class="accordion-item-title"><span class="icon"></span>Why cant Sign in? </label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion9" />
                                        <label for="accordion9" class="accordion-item-title"><span class="icon"></span>How can I buy Gold Subscription?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion10" />
                                        <label for="accordion10" class="accordion-item-title"><span class="icon"></span>How to contact customer service?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion11" />
                                        <label for="accordion11" class="accordion-item-title"><span class="icon"></span>Do you have any branches?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion12" />
                                        <label for="accordion12" class="accordion-item-title"><span class="icon"></span>How can I buy Gold Subscription?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion13" />
                                        <label for="accordion13" class="accordion-item-title"><span class="icon"></span>How to contact customer service?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion14" />
                                        <label for="accordion14" class="accordion-item-title"><span class="icon"></span>How to contact customer service?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className='bghhr'></hr>
                </div>

            </div>
        </div>

    )
}

export default Home
