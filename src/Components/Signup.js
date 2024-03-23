import React from 'react'
import { Button, Card, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import './Login.css'
import Header from '../Header';
import Footer from '../Footer';

const Signup = () => {
    return (
        <div>
            <Header/>
            <div className="new-wrapper">
                <h1 className='Signup1'>Sign in as a Tutor</h1>
                <p className='lets'>Lets Start the Journey </p>
                <section id="advertisers" class="advertisers-service-sec pt-5 pb-5 mb-5" style={{
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

                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control className=" FormControl3" type="text" maxLength={20} name="name" placeholder='Enter your first name' required />

                                            </Form.Group>

                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control className=" FormControl3" type="text" maxLength={20} name="lastname" placeholder='Enter your last name' required />

                                            </Form.Group>

                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control className=" FormControl3" type="email" maxLength={20} name="email" placeholder='Enter your Email Address' required />

                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control className=" FormControl3" type="password" maxLength={20} name="password" placeholder='Pick a password' required />

                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control className=" FormControl3" type="text" maxLength={20} name="name" placeholder='Enter your business name ' required />

                                            </Form.Group>


                                            <Form.Select aria-label="Default select example FormControl3">
                                                <option>Enter your business type</option>
                                                <option value="I am a Private Tutor">I am a Private Tutor</option>
                                                <option value="I am a Tuition Center ">I am a Tuition Center </option>

                                            </Form.Select>

                                            <p className='ForgetPassword2' >I agree to the Terms of Service <b style={{ color: "black",fontWeight:"400" }}>and</b> Privacy Policy.</p>



                                            <Button className='VOIR_LESPRODUITSbn99 ' type="submit">Log in account</Button>

                                        </Form>

                                    </Card>
                                    <br></br> <br></br> <br></br>
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

export default Signup
