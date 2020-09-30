import React from 'react';
import Styled from 'styled-components';

const Styles = Styled.div`
  background-color: rgb(250,128,114);
  border-radius: 50px;

  .filler{
    margin-top: 10px;
  }
`;

function About() {

  return (
    <Styles className = 'page-content'>
      <h3 className = 'content-header'>about</h3>
      <div className = 'filler'>
          <p>
            Hey there! My name is Jack and I am a software engineer located in Irvine, CA.
            Feel free to check out my resume, some of my links, or send me an email at <u>jackmurray445@gmail.com.</u>
          </p>
          <p>
            A little bit about myself. I grew up in Manhattan Beach, CA until the first grade when I moved into a ranch with my parents in Temecula, CA 
            (the horse is mine, but not the raptor unfortunately). Being isolated out in the middle of nowhere for a large portion of my life is what lead 
            to my passion in technology and eventually pursue a degree in computer science. Besides that, I enjoy video games, sports (Go Eagles!), 
            and just learning something new.
          </p>
      </div>
    </Styles>
  );
}

export default About;