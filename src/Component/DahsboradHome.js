import React from 'react'

import '../Dashboard.css'
import { Container } from 'react-bootstrap'

import { Dropdown, Navbar } from 'react-bootstrap'

import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBars } from 'react-icons/fa'
import Sidebars from '../Sidebars'

const DahsboradHome = () => {
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
                <FaBars className='share3'/>
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
        </Container>
      </div>
    </div>
  )
}

export default DahsboradHome
