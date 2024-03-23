import React from 'react'
import { Button, Card, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import './Login.css'
import Header from '../Header'
import Footer from '../Footer'
const Login = () => {



    return (
        <div>
            <Header />
            <div className="new-wrapper">
                <h1 className='Signup1'>Sign in as a Tutor</h1>
                <p className='lets'>Lets Start the Journey </p>
                <section id="advertisers" class="advertisers-service-sec pt-5 pb-5  mb-5" style={{
                    backgroundImage:
                        "url('./img/signup.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", padding: "90px 0px 90px 0px"
                }}>
                    <div class="container">

                        <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                            <div class="col">

                            </div>
                            <div class="col">
                                <div class="service-card2">
                                    <Card className='card576'>
                                        <h1 className='Signup2'>Let’s get started!</h1>
                                        <Form className='form9180' >

                                            <Form.Group className="mb-4" controlId="formBasicEmail">

                                                <Form.Control className=" FormControl3" type="email" maxLength={20} name="email" placeholder='Email' required />

                                            </Form.Group>

                                            <Form.Group className="mb-4" controlId="formBasicEmail">

                                                <Form.Control className="no-outline FormControl3" type="password" placeholder='Password' maxLength={20}
                                                    name="password"
                                                    required />
                                                <a href='#' className='ForgetPassword'>Forget Password ?</a>

                                            </Form.Group>

                                            <Button className='VOIR_LESPRODUITSbn9 ' type="submit">Sign in</Button>

                                        </Form>
                                        <h5 className='notres'>Not Registered ?</h5>
                                        <a href='Signup' className='notres1'>Sign Up</a>
                                    </Card>
                                    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                                </div>
                            </div>
                            <div class="col">

                            </div>

                        </div>
                    </div>
                </section>




            </div>
            <div style={{ backgroundColor: "#1d3748" }} className='bg76'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h5 style={{ color: "white" }}>Keep up to date — Get e-mail updates</h5>
                            <p style={{ color: "white" }}>Stay tuned for the latest company news.</p>
                        </Col>
                        <Col sm={6}>
                            <Form >

                                <div className="d-flex my-2">
                                    <Form.Control type="text" className='form1' placeholder='Enter e-mail Address' />

                                    <Button variant="" className='btn809' type="button">
                                    Subscribe Now
                                    </Button>

                                </div>



                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Login
