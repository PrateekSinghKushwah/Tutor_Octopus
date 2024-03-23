
import React, { useState } from "react";

import './Sidebars.css'

import { CiSquareChevLeft } from "react-icons/ci";
import {
  Sidebar,
  
  Menu,
  MenuItem
  //useProSidebar
} from "react-pro-sidebar";
import {  Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Sidebars() {
  //const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute" }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu className="menui" style={{ margin: "20px 0px 20px 0px" }}>
            {collapsed ? (
              <MenuItem
                icon={<CiSquareChevLeft />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<CiSquareChevLeft />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{

                    // textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px"
                  }}
                >
                  <img src="./img/logo.png" className="logoimgy " /> <span className="TutorOctopus">Tutor Octopus</span>
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
            <Nav className="me-auto menuhi" role="navigation" >
              <MenuItem icon={<img src="./img/home.png" className="logoimgy1 " />} >
                <Link to="/" className="navlinkjh"> Home</Link>
              </MenuItem>
              <MenuItem icon={<img src="./img/student1.png" className="logoimgy1 " />} >
                <Link to="/login" className="navlinkjh"> Student</Link>
              </MenuItem>
              <MenuItem icon={<img src="./img/Calendar.png" className="logoimgy1 " />} >
                <Link to="/login" className="navlinkjh"> Calendar</Link>
              </MenuItem>
              <MenuItem icon={<img src="./img/OnlineMaterial.png" className="logoimgy1 " />} >
                <Link to="/login" className="navlinkjh">Online Material </Link>
              </MenuItem>
              <MenuItem icon={<img src="./img/Expenses.png" className="logoimgy1 " />} >
                <Link to="/login" className="navlinkjh">Expenses & Revenue </Link>
              </MenuItem>
              <MenuItem icon={<img src="./img/Quiz.png" className="logoimgy1 " />} >
                <Link to="/login" className="navlinkjh">Quiz</Link>
              </MenuItem>
              <MenuItem icon={<img src="./img/ExamFeatures.png" className="logoimgy1 " />} >
                <Link to="/login" className="navlinkjh">Exam Features</Link>
              </MenuItem>
              <MenuItem icon={<img src="./img/Announcements.png" className="logoimgy1 " />} >
                <Link to="/login" className="navlinkjh">Announcements </Link>
              </MenuItem>
              <MenuItem icon={<img src="./img/Website.png" className="logoimgy1 " />} >
                <Link to="/login" className="navlinkjh">Website</Link>
              </MenuItem>
              <MenuItem icon={<img src="./img/BusinessReport.png" className="logoimgy1 " />} >
                <Link to="/login" className="navlinkjh">Business Report</Link>
              </MenuItem>

              {/* <SubMenu defaultOpen label={"Professors"} icon={<RiTeamLine />}>
              <MenuItem icon={<RiUserFollowLine />}>Active </MenuItem>
              <MenuItem icon={<RiUserUnfollowLine />}>Ex Professors</MenuItem>
              <MenuItem icon={<RiCalendar2Line />}>Probation Period</MenuItem>
            </SubMenu> */}
              {/* <SubMenu defaultOpen label={"Records"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}>Senior Students</MenuItem>
              <MenuItem icon={<RiPlantLine />}>Junior Students</MenuItem>
            </SubMenu> */}
            </Nav>
          </Menu>
        </main>
      </Sidebar>
     
    </div>
  );
}
export default Sidebars;
