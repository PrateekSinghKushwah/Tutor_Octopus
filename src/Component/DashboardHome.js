import React from 'react'

import '../Dashboard.css'
import { Col, Container, Row } from 'react-bootstrap'

import { Dropdown, Navbar } from 'react-bootstrap'

import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBars } from 'react-icons/fa'
import Sidebars from '../Sidebars'
import './Dash.css'

const DashboardHome = () => {


  return (
    <div>
      <Sidebars />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='subscrip'>Home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            <Navbar.Text>
              <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' /><SiTypescript className='share2' />

            </Navbar.Text>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaBars className='share3' />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Subscription</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Container>
          <h1 className='subscrip2'>Lets get Started, Tushar</h1>
          <Row>
            <Col sm={1}>

            </Col>
            <Col sm={11}>
              <div className="container bnnbcon">
                <div className="progress-container ">
                  <div className="progress" id="progress"></div>
                  <div ><img src='./img/createaccount.png' className="circle active" width={90} /> Create Account</div>

                  <div ><img src='./img/student.png' className="circle" width={90} />  Add Student</div>
                  <div ><img src='./img/Calendar.png' className="circle " width={90} />Schedule Event</div>
                  <div ><img src='./img/img7.png' className="circle " width={90} /> You have got it</div>

                </div>

              </div>
              
            </Col>

          </Row>

       
            <div class="container bkkcon">
             
              <div class="row mt-5 mt-md-3 row-cols-2 row-cols-sm-1 row-cols-md-4 justify-content-center">
                <div class="col">
                  <div class="service-card">
                    <div class="icon-wrapper">
                      <img src='./img/Calendar.png' className='imhhg'/>
                    </div><h4 className='text-center text-white my-3'>0</h4>
                    <p className='text-center text-white'>
                    Events left this<br></br> week
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="service-card">
                    <div class="icon-wrapper">
                      <img src='./img/mon.png' className='imhhg'/>
                    </div><h4 className='text-center text-white my-3'>0</h4>
                    <p className='text-center text-white'>
                    Payment received<br></br> this month
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="service-card">
                    <div class="icon-wrapper">
                      <img src='./img/price.png' className='imhhg'/>
                    </div><h4 className='text-center text-white my-3'>RS.00.0</h4>
                    <p className='text-center text-white'>
                    Projected Revenue<br></br> this month
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="service-card">
                    <div class="icon-wrapper">
                      <img src='./img/user.png' className='imhhg'/>
                    </div><h4 className='text-center text-white my-3'>0</h4>
                    <p className='text-center text-white'>
                    Active Students
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
       <hr></hr>
<div>
  <img src='./img/calendar.png' className='calender5'/>
  <p className='text-center my-4' style={{color:"black",fontWeight:"700"}}>There's nothing on your schedule for 28-02-2024</p>
</div>
        </Container>
      </div>
    </div>
  )
}

export default DashboardHome
