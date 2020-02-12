import React from 'react';
import Styled from 'styled-components';
import {Nav, Navbar} from 'react-bootstrap/';
import {Link} from 'react-router-dom';



const Styles = Styled.div`
//  background-color:gray;
 height: 235px;
 max-height:235px;
 min-height:235px;
 nav{
   
  Position: relative;
  Top: 50%;
  Transform: translateY(-50%);
 }
 .first{
   width:50%;
   
 }
 .second{
   
   width:50%;
 }

 .nav-link{
   max-width:50px;
   margin: 0 auto !important;
 }

 @media (min-width: 992px){
  .first{
    margin-right: 200px !important;
  }

  .second-link, .first-link{
    margin: 0 auto !important;
    width:50%;
  }
 }
  
`;

function MainNavbar() {
  return (
    <Styles>
      <Navbar bg="white" expand="lg">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="mr-auto first">
            <div className = "first-link about-link"> 
              <Nav.Link as={Link} to="/about" >About</Nav.Link>
            </div>
            <div className = "first-link experience-link">
              <Nav.Link as={Link} to="/experience" >Experience</Nav.Link>
            </div>
          </Nav>
          <Nav className="justify-content-end second">
            <div className = "second-link links-link"> 
              <Nav.Link as={Link} to="/links">Links</Nav.Link>
            </div>
            <div className = "second-link resume-link"> 
              <a href="assests/resume/Jack_Finn_Murray_Resume.pdf" target="_blank" className = 'nav-link'>Resume</a>
              {/* <Nav.Link as={Link} to="/resume">Resume</Nav.Link> */}
            </div>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </Styles>
  );
}

export default MainNavbar;