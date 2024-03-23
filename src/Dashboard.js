import React from 'react'
import Sidebars from './Sidebars'
import './Dashboard.css'
import { Container } from 'react-bootstrap'
import App1 from './App1'
import { Dropdown, Navbar } from 'react-bootstrap'

import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBars } from 'react-icons/fa'
const Dashboard = () => {
 
  return (
    <div>
      <Sidebars />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='subscrip'>Subscription</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            <Navbar.Text>
              <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' /><SiTypescript className='share2' />

            </Navbar.Text>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaBars className='share3'/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Subscription</Dropdown.Item>
              
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   <div className='content2'>
   <Container>
      <p className='text-center p098'>Switch the toggle to change between Monthly and Annually </p>
      <App1/>
    </Container>

   </div>
    </div>
  )
}

export default Dashboard
