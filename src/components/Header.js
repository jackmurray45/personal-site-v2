import React from 'react';
import Styled from 'styled-components';
import MainNavbar from './MainNavbar';
import TransitionPhotos from './TransitionPhotos';
import {useSpring, animated} from 'react-spring'



const Styles = Styled.div`
  text-align:center;

`;

function Header() {

  const bold1 = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 1000}})
  const bold2 = useSpring({from: {opacity: 0}, to: {opacity: 1}, config: {duration: 1000}, delay: 1000 })
  const bold3 = useSpring({from: {opacity: 0}, to: {opacity: 1}, config: {duration: 1000}, delay: 2000 })

  return (
    <Styles>
      <div className = 'header'>
          <h1>Jack Murray</h1>
          <TransitionPhotos/>
          <MainNavbar/>

          <h2 className = 'h2-section'>
            <animated.span style={bold1}>Learner.</animated.span>
            <animated.span style={bold2}>Builder.</animated.span>
            <animated.span style={bold3}>Human Being.</animated.span>
          </h2>
      </div>
      

    </Styles>
  );
}

export default Header;