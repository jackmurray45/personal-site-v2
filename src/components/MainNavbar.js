import React from 'react';
import Styled from 'styled-components';
import {Nav, Navbar} from 'react-bootstrap/';
import HoverNavLink from './HoverNavLink';
import { useLocation } from 'react-router-dom'



const Styles = Styled.div`
 height: 235px;

 nav{  
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-top:15px;
  background-color:transparent;
  padding-top:0px;
  padding-bottom:0px;
  
 }
 
 .first{
   width:50%;
   
 }
 .second{
   width:50%;
 }

 @media (min-width: 992px){
  .first{
    margin-right: 200px !important;
  }

  .second-link, .first-link{
    margin: 0 auto;
    width:50%;
  }
 }

`;

function MainNavbar() {

  const location = useLocation(); 
  const path = location.pathname.substring(1);

  return (
    <Styles>
      <Navbar bg="white" expand="lg">
          <Nav className="mr-auto first">
            <HoverNavLink name = 'about' link = 'about' className = 'first-link about-link' isActive = {path === 'about' || path === ''}/>
            <HoverNavLink name = 'experience' link = 'experience' className = 'first-link experience-link' isActive = {path === 'experience'}/>
          </Nav>
          <Nav className="justify-content-end second">
            <HoverNavLink name = 'links' link = 'links' className = 'second-link links-link' isActive = {path === 'links'}/>
            <HoverNavLink name = 'resume' link = 'assests/resume/Jack_Finn_Murray_Resume.pdf' tab = 'true' className = 'second-link resume-link'/>
          </Nav>
      </Navbar>
    </Styles>
  );
}

export default MainNavbar;